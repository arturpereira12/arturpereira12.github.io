import { useRef, useState, useEffect, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { createPianoEngine } from "./pianoAudio";
const names = [
  "Dó",
  "Dó sustenido",
  "Ré",
  "Ré sustenido",
  "Mi",
  "Fá",
  "Fá sustenido",
  "Sol",
  "Sol sustenido",
  "Lá",
  "Lá sustenido",
  "Si",
];
const codes = [
  "KeyZ",
  "KeyS",
  "KeyX",
  "KeyD",
  "KeyC",
  "KeyV",
  "KeyG",
  "KeyB",
  "KeyH",
  "KeyN",
  "KeyJ",
  "KeyM",
  "KeyQ",
  "Digit2",
  "KeyW",
  "Digit3",
  "KeyE",
  "KeyR",
  "Digit5",
  "KeyT",
  "Digit6",
  "KeyY",
  "Digit7",
  "KeyU",
  "KeyI",
  "Digit9",
  "KeyO",
  "Digit0",
  "KeyP",
  "BracketLeft",
  "Equal",
  "BracketRight",
  "Backslash",
  "Semicolon",
  "Quote",
  "Slash",
];
const labels = [
  "Z",
  "S",
  "X",
  "D",
  "C",
  "V",
  "G",
  "B",
  "H",
  "N",
  "J",
  "M",
  "Q",
  "2",
  "W",
  "3",
  "E",
  "R",
  "5",
  "T",
  "6",
  "Y",
  "7",
  "U",
  "I",
  "9",
  "O",
  "0",
  "P",
  "[",
  "=",
  " ]",
  "\\",
  ";",
  "'",
  "/",
];
const whiteNotes = Array.from(
  { length: 21 },
  (_, i) => 48 + Math.floor(i / 7) * 12 + [0, 2, 4, 5, 7, 9, 11][i % 7],
);
export default function Piano() {
  const [sound, setSound] = useState(true);
  const [active, setActive] = useState(new Set());
  const [failed, setFailed] = useState(false);
  const scene = useRef(null),
    engine = useRef(null),
    visible = useRef(true),
    keys = useRef(new Map()),
    timers = useRef(new Set());
  const release = useCallback((note) => {
    engine.current?.noteOff(note);
    setActive((previous) => {
      const next = new Set(previous);
      next.delete(note);
      return next;
    });
  }, []);
  const play = useCallback(
    (note) => {
      setActive((previous) => new Set(previous).add(note));
      if (!sound) return;
      if (!engine.current) engine.current = createPianoEngine();
      void engine.current.noteOn(note).catch(() => {
        setFailed(true);
      });
    },
    [sound],
  );
  const stop = useCallback(() => {
    engine.current?.stopAll();
    keys.current.clear();
    setActive(new Set());
  }, []);
  useEffect(() => {
    const root = scene.current;
    const observer = new IntersectionObserver(([entry]) => {
      visible.current = entry.isIntersecting;
      if (!entry.isIntersecting) stop();
    });
    observer.observe(root);
    const down = (event) => {
      if (
        !visible.current ||
        event.repeat ||
        event.ctrlKey ||
        event.metaKey ||
        event.altKey ||
        event.target.closest('input,textarea,select,[contenteditable="true"]')
      )
        return;
      const index = codes.indexOf(event.code),
        note = 48 + index;
      if (
        index < 0 ||
        !root.querySelector(`[data-note="${note}"]`)?.getClientRects().length
      )
        return;
      event.preventDefault();
      keys.current.set(event.code, note);
      play(note);
    };
    const up = (event) => {
      const note = keys.current.get(event.code);
      if (note !== undefined) {
        release(note);
        keys.current.delete(event.code);
      }
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", stop);
    const hidden = () => {
      if (document.hidden) stop();
    };
    document.addEventListener("visibilitychange", hidden);
    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      window.removeEventListener("blur", stop);
      document.removeEventListener("visibilitychange", hidden);
      stop();
    };
  }, [play, release, stop]);
  useEffect(() => {
    const timeoutSet = timers.current;
    return () => {
      timeoutSet.forEach(clearTimeout);
      engine.current?.dispose();
      engine.current = null;
    };
  }, []);
  function button(note, black = false) {
    return (
      <button
        data-note={note}
        className={`${black ? "black-key" : "white-key"} ${active.has(note) ? "pressed" : ""}`}
        aria-label={`${names[note % 12]}, oitava ${Math.floor(note / 12) - 1}. Tecla ${labels[note - 48].trim()}`}
        onPointerDown={(event) => {
          if (event.button !== 0) return;
          event.currentTarget.setPointerCapture(event.pointerId);
          play(note);
        }}
        onPointerUp={() => release(note)}
        onPointerCancel={() => release(note)}
        onLostPointerCapture={() => release(note)}
        onClick={(event) => {
          if (event.detail === 0) {
            play(note);
            const timer = setTimeout(() => {
              release(note);
              timers.current.delete(timer);
            }, 400);
            timers.current.add(timer);
          }
        }}
      >
        <span aria-hidden="true">{labels[note - 48].trim()}</span>
      </button>
    );
  }
  return (
    <div ref={scene} className="piano-scene">
      <div
        className="piano-instrument"
        role="group"
        aria-label="Piano interativo. Cada tecla mostra seu atalho no teclado. É possível tocar acordes e segurar as notas."
      >
        <div className="piano-fallboard">
          <span>Artur Pereira</span>
          <span aria-hidden="true">♮</span>
        </div>
        <div className="piano-keys">
          {whiteNotes.map((note, i) => (
            <div className="piano-key-slot" key={note}>
              {button(note)}
              {[0, 1, 3, 4, 5].includes(i % 7) && button(note + 1, true)}
            </div>
          ))}
        </div>
        <div className="piano-front" />
      </div>
      <div className="piano-controls">
        <button
          className="sound-toggle"
          aria-pressed={sound}
          onClick={() => {
            stop();
            setSound(!sound);
            setFailed(false);
          }}
        >
          {sound ? (
            <Volume2 size={15} aria-hidden="true" />
          ) : (
            <VolumeX size={15} aria-hidden="true" />
          )}
          {sound ? "Desativar som" : "Ativar som"}
        </button>
      </div>
      <p className="piano-message" aria-live="polite">
        {failed
          ? "Não foi possível iniciar o áudio. Tente ativar o som novamente."
          : "Use os atalhos nas teclas, clique ou toque. Segure para sustentar; combine para tocar acordes."}
      </p>
    </div>
  );
}
