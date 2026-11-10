import { Trophy, Medal, Award } from "lucide-react";
const awards = [
  {
    title: "Maior nota de redação da Paraíba",
    source: "ENEM",
    date: "2023",
    description:
      "980 de 1.000 pontos na redação do Exame Nacional do Ensino Médio (ENEM), a maior nota do estado naquele ano.",
    icon: Trophy,
  },
  {
    title: "Aluno Destaque José Lins do Rêgo",
    source: "Reconhecimento por conquistas olímpicas",
    date: "2023",
    description:
      "Homenagem da prefeitura de João Pessoa-PB como estudante destaque por conquistas em olimpíadas acadêmicas.",
    icon: Award,
  },
  {
    title: "Medalhas em olimpíadas acadêmicas",
    source: "OBA · OBEF · OBG",
    date: "2018 — 2023",
    description:
      "Medalha de ouro (2019), duas medalhas de bronze (2018 e 2020) e medalha de bronze (2023) nas olimpíadas brasileiras de Astronomia, Educação Financeira e Geografia.",
    icon: Medal,
  },
];
export default function Awards({ embedded = false }) {
  const Heading = embedded ? "h2" : "h1";
  const AwardHeading = embedded ? "h3" : "h2";
  return (
    <section
      id={embedded ? "conquistas" : undefined}
      className="page inner-page awards-section"
    >
      <div className="page-heading">
        <Heading>Conquistas pelo caminho.</Heading>
        <p>Reconhecimentos em escrita, ciência e olimpíadas acadêmicas.</p>
      </div>
      <div className="awards-list">
        {awards.map((a) => (
          <article className="award-row" key={a.title}>
            <div className="award-icon">
              <a.icon size={28} aria-hidden="true" />
            </div>
            <div>
              <p className="project-note">{a.source}</p>
              <AwardHeading>{a.title}</AwardHeading>
              <p>{a.description}</p>
            </div>
            <span className="award-date">{a.date}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
