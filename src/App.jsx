import { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon, ArrowUpRight, Download } from "lucide-react";
import Home from "./pages/Home";
const links = [
  ["sobre", "Sobre"],
  ["trajetoria", "Experiência"],
  ["projetos", "Projetos"],
  ["conquistas", "Conquistas"],
  ["contato", "Contato"],
];
const legacy = {
  "/experiences": "trajetoria",
  "/projects": "projetos",
  "/awards": "conquistas",
  "/contact": "contato",
};
export default function App() {
  const navigation = useRef(null),
    menuButton = useRef(null);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("sobre");
  const [cadence, setCadence] = useState(null);
  const previousSection = useRef("sobre");
  useEffect(() => {
    if (previousSection.current !== active) {
      previousSection.current = active;
      setCadence(active);
    }
  }, [active]);
  const [dark, setDark] = useState(
    () => localStorage.getItem("portfolio-theme") !== "light",
  );
  useEffect(() => {
    if (menu) navigation.current?.querySelector("a")?.focus();
  }, [menu]);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);
  useEffect(() => {
    if (legacy[location.pathname])
      history.replaceState(null, "", `/#${legacy[location.pathname]}`);
    let frame;
    const sections = links.map(([id]) => document.getElementById(id));
    const update = () => {
      frame = null;
      let current = "sobre";
      for (const section of sections)
        if (section.getBoundingClientRect().top <= innerHeight * 0.38)
          current = section.id;
      setActive(current);
      document.documentElement.dataset.section = current;
      document.querySelector('meta[name="theme-color"]').content =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--bg")
          .trim();
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const followHash = () => {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        target.classList.add("is-revealed");
        target.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
        });
      }
      setMenu(false);
    };
    const initial = requestAnimationFrame(() => {
      if (location.hash) followHash();
      update();
    });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", followHash);
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(initial);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", followHash);
    };
  }, []);
  useEffect(() => {
    const escape = (e) => {
      if (e.key === "Escape" && menu) {
        setMenu(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [menu]);
  return (
    <>
      <a className="skip-link" href="#main">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Artur Pereira, início">
          <span className="brand-mark">ap.</span>
        </a>
        <nav
          ref={navigation}
          id="navigation"
          aria-label="Navegação principal"
          className={menu ? "navigation open" : "navigation"}
        >
          {links.map(([id, name]) => (
            <a
              key={id}
              href={`#${id}`}
              className={
                active === id
                  ? `active ${cadence === id ? "nav-playing" : ""}`
                  : ""
              }
              aria-current={active === id ? "location" : undefined}
              onClick={() => {
                setMenu(false);
                if (menu) menuButton.current?.focus();
                document.getElementById(id)?.classList.add("is-revealed");
              }}
            >
              <span className="nav-label">{name}</span>
              {active === id && cadence === id && (
                <span className="nav-notes" aria-hidden="true">
                  {[0, 1, 2].map((note) => (
                    <span key={note} style={{ "--note-order": note }}>
                      ♪
                    </span>
                  ))}
                </span>
              )}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button"
            onClick={() => setDark(!dark)}
            aria-label={dark ? "Ativar tema claro" : "Ativar tema escuro"}
          >
            {dark ? (
              <Sun size={19} aria-hidden="true" />
            ) : (
              <Moon size={19} aria-hidden="true" />
            )}
          </button>
          <button
            ref={menuButton}
            className="icon-button menu-toggle"
            aria-expanded={menu}
            aria-controls="navigation"
            aria-label={menu ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        <Home />
      </main>
      <footer className="site-footer">
        <div>
          <a className="brand-mark" href="#inicio">
            ap.
          </a>
          <p>Software, dados e novas possibilidades.</p>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/arturpereira12"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com/in/arturpereira12"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <details className="footer-resume-picker">
            <summary>
              Currículo <Download size={15} aria-hidden="true" />
            </summary>
            <div>
              <a href={`${import.meta.env.BASE_URL}Artur-Pereira-CV-PTBR.pdf`} download>
                Português
              </a>
              <a href={`${import.meta.env.BASE_URL}Artur-Pereira-CV-EN.pdf`} download>
                English
              </a>
            </div>
          </details>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Artur Pereira</p>
      </footer>
    </>
  );
}
