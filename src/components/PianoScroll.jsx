import { useEffect, useRef } from "react";

export function usePianoReveal() {
  useEffect(() => {
    const root = document.querySelector(".home-composition");
    const targets = root.querySelectorAll(
      ".about-section, .trajectory-section .section-heading, .experience-row, .selected-section .section-heading, .project-preview, .awards-section .page-heading, .award-row, .contact-page .page-heading, .email-link, .contact-options",
    );
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
    );
    targets.forEach((target, index) => {
      target.classList.add("piano-reveal");
      target.style.setProperty("--reveal-direction", index % 2 ? "-1" : "1");
      observer.observe(target);
    });
    return () => {
      observer.disconnect();
      targets.forEach((target) => {
        target.classList.remove("piano-reveal", "is-revealed");
      });
    };
  }, []);
}

export default function PianoFinale() {
  const root = useRef(null);
  useEffect(() => {
    const section = root.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame;
    const update = () => {
      frame = null;
      const rect = section.getBoundingClientRect();
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const reachedPageEnd = window.scrollY >= maxScroll - 2;
      const progress = preference.matches
        ? 1
        : reachedPageEnd
          ? 1
          : Math.max(
            0,
            Math.min(
              1,
              (window.innerHeight - rect.top) /
                (window.innerHeight + rect.height * 0.15),
            ),
            );
      section.style.setProperty("--finale-progress", progress);
      section.style.setProperty(
        "--finale-expand",
        Math.max(0, Math.min(1, (progress - 0.25) / 0.5)),
      );
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    preference.addEventListener("change", schedule);
    update();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <section
      ref={root}
      className="piano-finale page"
      aria-label="Artur Pereira. A próxima composição começa aqui."
    >
      <div className="finale-staff" aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} />
        ))}
      </div>
      <div className="finale-identity" aria-hidden="true">
        <span className="identity-word">
          <span>A</span>
          <span className="identity-expansion">rtur</span>
        </span>
        <span className="identity-word">
          <span>P</span>
          <span className="identity-expansion">ereira</span>
        </span>
        <span className="identity-dot">.</span>
      </div>
      <div className="finale-keyboard" aria-hidden="true">
        {Array.from({ length: 14 }, (_, i) => (
          <span key={i} style={{ "--key-order": i }} />
        ))}
      </div>
      <p>A próxima composição começa aqui.</p>
    </section>
  );
}
