import { ArrowUpRight, Mail, Download } from "lucide-react";
function ContactPiano() {
  return (
    <span className="contact-piano" aria-hidden="true">
      <svg viewBox="0 0 140 140" focusable="false">
        <ellipse className="contact-piano-shadow" cx="73" cy="125" rx="49" ry="9" fill="#000" opacity=".22" />
        <g className="contact-piano-instrument">
          <path d="M25 35 53 17 119 34 92 53Z" fill="#52545a" />
          <path d="M25 35 53 49 53 119 25 99Z" fill="#282a30" />
          <path d="M53 49 119 34 119 104 53 119Z" fill="#17181d" />
          <path d="M59 54 113 42 113 77 59 89Z" fill="#303238" />
          <path d="M62 58 110 47" stroke="#a8a29a" strokeWidth="1" />
          <path d="M53 89 119 74 127 85 61 101Z" fill="#0c0d10" />
          <g transform="matrix(1 -.23 .55 .8 56 89)">
            {Array.from({ length: 10 }, (_, i) => (
              <rect className="contact-piano-key" key={i} x={i * 6} y="0" width="5.5" height="12" rx=".5" fill="#eeebe4" style={{ "--key-order": i }} />
            ))}
            {[0, 1, 3, 4, 5, 7, 8].map((i) => (
              <rect className="contact-piano-key" key={`black-${i}`} x={i * 6 + 4} y="0" width="3" height="7" rx=".4" fill="#101114" style={{ "--key-order": i + 1 }} />
            ))}
          </g>
          <path d="M61 101 127 85 127 91 61 107Z" fill="#44464b" />
          <path d="M57 112 62 111 62 126 57 127ZM112 101 117 100 117 115 112 117Z" fill="#121318" />
          <path d="M79 116 83 115 86 120 82 121ZM88 114 92 113 95 118 91 119Z" fill="#b8a37c" />
        </g>
      </svg>
    </span>
  );
}
export default function Contact({ embedded = false }) {
  const Heading = embedded ? "h2" : "h1";
  const OptionHeading = embedded ? "h3" : "h2";
  return (
    <section
      id={embedded ? "contato" : undefined}
      className="page inner-page contact-page"
    >
      <div className="page-heading">
        <p>Uma conversa pode ser o começo</p>
        <Heading>Vamos trocar ideias.</Heading>
        <p>
          Para conversar sobre projetos, pesquisa ou oportunidades, entre em
          contato por e-mail ou pelo LinkedIn.
        </p>
      </div>
      <a className="email-link contact-piano-link" href="mailto:arturguedespereira@gmail.com">
        <Mail size={26} aria-hidden="true" />
        <span>
          arturguedespereira@
          <wbr />
          gmail.com
        </span>
        <ArrowUpRight aria-hidden="true" />
        <ContactPiano />
      </a>
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
        <a
          className="contact-piano-link"
          href={`${import.meta.env.BASE_URL}Artur-Pereira-CV-PTBR.pdf`}
          download
        >
          <OptionHeading>
            Currículo <Download aria-hidden="true" />
          </OptionHeading>
          <p>Minha experiência em PDF</p>
          <ContactPiano />
        </a>
      </div>
      <p className="location">João Pessoa, Paraíba · Brasil</p>
    </section>
  );
}
