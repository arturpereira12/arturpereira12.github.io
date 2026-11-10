import { ArrowUpRight } from "lucide-react";
import Piano from "../components/Piano";
import Awards from "./Awards";
import Contact from "./Contact";
import Experiences from "./Experiences";
import { projects } from "../data";
import PianoFinale, { usePianoReveal } from "../components/PianoScroll";
export default function Home() {
  usePianoReveal();
  return (
    <div className="home-composition">
      <section className="piano-hero page" id="inicio">
        <div className="hero-overline">
          <span>Pesquisa, dados & IA</span>
          <span>João Pessoa, Brasil</span>
        </div>
        <h1>
          Artur Pereira<span className="name-period">.</span>
        </h1>
        <div className="hero-introduction">
          <p>
            Ciência da Computação — UFPB.
            <br />
            Pesquisador no{" "}
            <a
              className="piano-name-link"
              href="https://aria.ci.ufpb.br/"
              target="_blank"
              rel="noreferrer"
            >
              ARIA
              <span className="link-keyboard" aria-hidden="true">
                {Array.from({ length: 7 }, (_, i) => (
                  <span key={i} style={{ "--note-order": i }} />
                ))}
              </span>
            </a>
            .
          </p>
        </div>
        <Piano />
        <a href="#trajetoria" className="scroll-cue">
          Explore minha trajetória <span aria-hidden="true">↓</span>
        </a>
      </section>
      <section className="page about-section" id="sobre">
        <div>
          <p className="section-kicker">Sobre mim</p>
          <h2>
            Curiosidade.
            <br />
            Prática.
            <br />
            Repertório.
          </h2>
        </div>
        <div>
          <p className="large-copy">
            Como pesquisador no ARIA, desenvolvo soluções em visão
            computacional, dados e inteligência artificial para problemas reais.
          </p>
          <p>
            Minha trajetória conecta pesquisa aplicada, análise de dados para
            políticas públicas e desenvolvimento de software. Este espaço reúne
            as experiências e os projetos que fazem parte desse caminho.
          </p>
          <div className="education">
            <img
              width="44"
              height="55"
              loading="lazy"
              src={`${import.meta.env.BASE_URL}ufpb-logo.png`}
              alt=""
            />
            <div>
              <h3>Ciência da Computação</h3>
              <p>Universidade Federal da Paraíba</p>
              <span>jun 2024 — dez 2027 (previsão) · GPA 8,98/10</span>
            </div>
          </div>
          <div className="education education-secondary">
            <img
              width="44"
              height="44"
              loading="lazy"
              src={`${import.meta.env.BASE_URL}unina-logo.png`}
              alt=""
            />
            <div>
              <h3>Estudante visitante · Data Science</h3>
              <p>Università degli Studi di Napoli Federico II (UNINA)</p>
              <span>fev 2027 — jul 2027 · Nápoles, Itália</span>
            </div>
          </div>
        </div>
      </section>
      <Experiences embedded />
      <section className="page selected-section" id="projetos">
        <div className="section-heading">
          <div>
            <h2>Meus projetos</h2>
          </div>
        </div>
        <div className="project-preview-grid">
          {projects.map((p) => (
            <a
              className="project-preview piano-project-link"
              href={p.github}
              target="_blank"
              rel="noreferrer"
              key={p.title}
            >
              <div className={`project-visual ${p.className}`}>
                <img
                  width="500"
                  height="350"
                  src={`${import.meta.env.BASE_URL}${p.image}`}
                  alt={`Prévia do projeto ${p.title}`}
                  loading="lazy"
                />
              </div>
              <div className="project-preview-title">
                <div>
                  <h3>
                    <span className="piano-name-link">
                      {p.title}
                      <span className="link-keyboard" aria-hidden="true">
                        {Array.from({ length: 7 }, (_, i) => (
                          <span key={i} style={{ "--note-order": i }} />
                        ))}
                      </span>
                    </span>
                  </h3>
                  <p>{p.category}</p>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </div>
              <p className="preview-description">{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
      <Awards embedded />
      <Contact embedded />
      <PianoFinale />
    </div>
  );
}
