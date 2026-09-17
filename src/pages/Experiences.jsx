import { experiences } from "../data";
export default function Experiences({ embedded = false }) {
  const Heading = embedded ? "h2" : "h1";
  return (
    <section
      id={embedded ? "trajetoria" : undefined}
      className={`page ${embedded ? "trajectory-section" : "inner-page"}`}
    >
      <div className={embedded ? "section-heading" : "page-heading"}>
        <div>
          <p className="section-kicker">
            Pesquisa, desenvolvimento e colaboração
          </p>
          <Heading>Minha trajetória.</Heading>
        </div>
        {!embedded && (
          <p>Experiências que conectam aprendizado técnico a desafios reais.</p>
        )}
      </div>
      <div className="experience-list">
        {experiences.map((e) => (
          <article className="experience-row" key={e.company}>
            <div className="experience-date">
              <span>{e.period}</span>
              {e.current && (
                <span className="current-badge">
                  <span className="status-dot" />
                  Em andamento
                </span>
              )}
            </div>
            <div>
              {embedded ? (
                <h3 className="experience-company">{e.company}</h3>
              ) : (
                <h2>{e.company}</h2>
              )}
              <p className="experience-role">{e.role}</p>
              <p>{e.description}</p>
              <div className="tags">
                {e.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
