export function createPianoEngine() {
  let context, master;
  const voices = new Map();
  const pending = new Set();
  async function noteOn(note) {
    if (pending.has(note) || voices.has(note)) return;
    pending.add(note);
    try {
      if (!context || context.state === "closed") {
        const Audio = window.AudioContext || window.webkitAudioContext;
        context = new Audio();
        const compressor = context.createDynamicsCompressor();
        compressor.threshold.value = -18;
        compressor.ratio.value = 4;
        master = context.createGain();
        master.gain.value = 0.55;
        master.connect(compressor);
        compressor.connect(context.destination);
      }
      await context.resume();
      if (!pending.has(note)) return;
      const now = context.currentTime;
      const frequency = 440 * 2 ** ((note - 69) / 12);
      const envelope = context.createGain();
      const filter = context.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 6500;
      envelope.gain.setValueAtTime(0, now);
      envelope.gain.linearRampToValueAtTime(0.34, now + 0.006);
      envelope.gain.exponentialRampToValueAtTime(0.09, now + 0.7);
      envelope.gain.exponentialRampToValueAtTime(0.001, now + 6);
      envelope.connect(filter);
      filter.connect(master);
      const oscillators = [1, 2, 3, 4, 6].map((harmonic, i) => {
        const oscillator = context.createOscillator();
        const partial = context.createGain();
        oscillator.frequency.value = frequency * harmonic * (1 + i * 0.0003);
        partial.gain.value = [1, 0.3, 0.12, 0.055, 0.018][i];
        oscillator.connect(partial);
        partial.connect(envelope);
        oscillator.start(now);
        oscillator.stop(now + 6.3);
        return oscillator;
      });
      voices.set(note, { envelope, filter, oscillators });
    } catch (error) {
      pending.delete(note);
      throw error;
    }
  }
  function noteOff(note) {
    pending.delete(note);
    const voice = voices.get(note);
    if (!voice || !context) return;
    const now = context.currentTime;
    voice.envelope.gain.cancelAndHoldAtTime(now);
    voice.envelope.gain.setTargetAtTime(0.0001, now, 0.07);
    voice.oscillators.forEach((oscillator) => oscillator.stop(now + 0.35));
    voice.oscillators[0].onended = () => {
      voice.envelope.disconnect();
      voice.filter.disconnect();
    };
    voices.delete(note);
  }
  function stopAll() {
    for (const note of [...pending]) noteOff(note);
  }
  function dispose() {
    stopAll();
    if (context) void context.close();
  }
  return { noteOn, noteOff, stopAll, dispose };
}
