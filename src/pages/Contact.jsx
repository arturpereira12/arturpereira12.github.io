import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, Download } from "lucide-react";
const EMAIL = "arturguedespereira@gmail.com";
function ContactPiano() {
  return (
    <span className="contact-piano" aria-hidden="true">
      <svg viewBox="0 0 140 140" focusable="false">
        <ellipse
          className="contact-piano-shadow"
          cx="73"
          cy="125"
          rx="49"
          ry="9"
          fill="#000"
          opacity=".22"
        />
        <g className="contact-piano-instrument">
          <path d="M25 35 53 17 119 34 92 53Z" fill="#52545a" />
          <path d="M25 35 53 49 53 119 25 99Z" fill="#282a30" />
          <path d="M53 49 119 34 119 104 53 119Z" fill="#17181d" />
          <path d="M59 54 113 42 113 77 59 89Z" fill="#303238" />
          <path d="M62 58 110 47" stroke="#a8a29a" strokeWidth="1" />
          <path d="M53 89 119 74 127 85 61 101Z" fill="#0c0d10" />
          <g transform="matrix(1 -.23 .55 .8 56 89)">
            {Array.from({ length: 10 }, (_, i) => (
              <rect
                className="contact-piano-key"
                key={i}
                x={i * 6}
                y="0"
                width="5.5"
                height="12"
                rx=".5"
                fill="#eeebe4"
                style={{ "--key-order": i }}
              />
            ))}
            {[0, 1, 3, 4, 5, 7, 8].map((i) => (
              <rect
                className="contact-piano-key"
                key={`black-${i}`}
                x={i * 6 + 4}
                y="0"
                width="3"
                height="7"
                rx=".4"
                fill="#101114"
                style={{ "--key-order": i + 1 }}
              />
            ))}
          </g>
          <path d="M61 101 127 85 127 91 61 107Z" fill="#44464b" />
          <path
            d="M57 112 62 111 62 126 57 127ZM112 101 117 100 117 115 112 117Z"
            fill="#121318"
          />
          <path
            d="M79 116 83 115 86 120 82 121ZM88 114 92 113 95 118 91 119Z"
            fill="#b8a37c"
          />
        </g>
      </svg>
    </span>
  );
}
export default function Contact({ embedded = false }) {
  const [copyStatus, setCopyStatus] = useState("");
  const resetTimer = useRef(null);
  useEffect(() => () => clearTimeout(resetTimer.current), []);
  const copyEmail = async () => {
    try {
      if (!navigator.clipboard?.writeText)
        throw new Error("Clipboard indisponível");
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const field = document.createElement("textarea");
      field.value = EMAIL;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      const copied = document.execCommand("copy");
      field.remove();
      if (!copied) {
        setCopyStatus("Não foi possível copiar. Selecione o endereço.");
        return;
      }
    }
    setCopyStatus("E-mail copiado");
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopyStatus(""), 2400);
  };
  const Heading = embedded ? "h2" : "h1";
  const OptionHeading = embedded ? "h3" : "h2";
  return (
    <section
      id={embedded ? "contato" : undefined}
      className="page inner-page contact-page"
    >
      <div className="page-heading">
        <Heading>Vamos trocar ideias.</Heading>
        <p>
          Para conversar sobre projetos, pesquisa ou oportunidades, entre em
          contato por e-mail ou pelo LinkedIn.
        </p>
      </div>
      <div className="email-contact-row contact-piano-link">
        <a className="email-link" href={`mailto:${EMAIL}`}>
          <Mail size={26} aria-hidden="true" />
          <span>
            arturguedespereira@
            <wbr />
            gmail.com
          </span>
          <ArrowUpRight aria-hidden="true" />
        </a>
        <button className="email-copy" type="button" onClick={copyEmail}>
          {copyStatus === "E-mail copiado" ? (
            <Check size={17} aria-hidden="true" />
          ) : (
            <Copy size={17} aria-hidden="true" />
          )}
          <span>
            {copyStatus === "E-mail copiado" ? "Copiado" : "Copiar e-mail"}
          </span>
        </button>
        <span className="sr-only" role="status" aria-live="polite">
          {copyStatus}
        </span>
        <ContactPiano />
      </div>
      <div className="contact-options">
        <a
          className="contact-piano-link"
          href="https://linkedin.com/in/arturpereira12"
          target="_blank"
          rel="noreferrer"
        >
          <OptionHeading>
            LinkedIn <ArrowUpRight aria-hidden="true" />
          </OptionHeading>
          <p>Conexões e trajetória profissional</p>
          <ContactPiano />
        </a>
        <a
          className="contact-piano-link"
          href="https://github.com/arturpereira12"
          target="_blank"
          rel="noreferrer"
        >
          <OptionHeading>
            GitHub <ArrowUpRight aria-hidden="true" />
          </OptionHeading>
          <p>Código e projetos em desenvolvimento</p>
          <ContactPiano />
        </a>
        <details className="contact-piano-link resume-picker">
          <summary>
            <OptionHeading>
              Currículo <Download aria-hidden="true" />
            </OptionHeading>
            <p>Escolha o idioma para baixar</p>
          </summary>
          <div className="resume-options">
            <a
              href={`${import.meta.env.BASE_URL}Artur-Pereira-CV-PTBR.pdf`}
              download
            >
              Português <Download size={16} aria-hidden="true" />
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Artur-Pereira-CV-EN.pdf`}
              download
            >
              English <Download size={16} aria-hidden="true" />
            </a>
          </div>
          <ContactPiano />
        </details>
      </div>
      <p className="location">João Pessoa, Paraíba · Brasil</p>
    </section>
  );
}
