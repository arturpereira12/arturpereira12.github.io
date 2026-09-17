import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";
export default function Projects() {
  return (
    <section className="page inner-page">
      <div className="page-heading">
        <p>Do conceito à aplicação</p>
        <h1>Projetos em prática.</h1>
        <p>
          Software e inteligência artificial aplicados a meio ambiente, educação
          e simulação.
        </p>
      </div>
      <div className="projects-list">
        {projects.map((p) => (
          <article className="project-detail" key={p.title}>
            <div className={`project-visual ${p.className}`}>
              <img
                width="500"
                height="350"
                src={`${import.meta.env.BASE_URL}${p.image}`}
                alt={`Interface ou identidade do projeto ${p.title}`}
                loading="lazy"
              />
            </div>
            <div className="project-detail-copy">
              <p className="project-note">{p.note}</p>
              <h2>{p.title}</h2>
              <p>{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a
                className="text-link"
                href={p.github}
                target="_blank"
                rel="noreferrer"
              >
                Ver repositório <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
