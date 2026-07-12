import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const technologies = [
  'C#',
  '.NET',
  'ASP.NET Core',
  'SQL Server',
  'APIs',
  'Entity Framework',
  'Dapper',
  'React',
  'TypeScript',
  'Git',
  'IIS',
  'Docker',
];

function getInitialTheme(): Theme {
  const storedTheme = localStorage.getItem('portfolio-theme');
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="container header-content">
          <a className="brand" href="#inicio" aria-label="Ir para o início">
            <span className="brand-mark">AF</span>
            <span>André Flores</span>
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label="Abrir ou fechar menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
            <a href="#sobre" onClick={closeMenu}>Sobre</a>
            <a href="#competencias" onClick={closeMenu}>Competências</a>
            <a href="#portfolio" onClick={closeMenu}>Portfólio</a>
            <a href="#contato" onClick={closeMenu}>Contato</a>
            <a href="/politica-de-privacidade/" onClick={closeMenu}>Privacidade</a>
            <button
              className="theme-button"
              type="button"
              aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
              onClick={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
            >
              {theme === 'dark' ? 'Tema claro' : 'Tema escuro'}
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Analista Desenvolvedor .NET Sênior Full Stack</p>
              <h1>Soluções web robustas, sustentáveis e orientadas ao negócio.</h1>
              <p className="hero-description">
                Mais de 20 anos de experiência em sistemas corporativos, aplicações críticas,
                integrações, performance de banco de dados e evolução de soluções legadas e modernas.
              </p>
              <p className="hero-stack">C# | ASP.NET Core | SQL Server | APIs | React | Git | IIS</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#portfolio">Ver portfólio</a>
                <a className="button button-secondary" href="mailto:dr.andre.flores@gmail.com">Entrar em contato</a>
              </div>
            </div>

            <aside className="profile-panel" aria-label="Apresentação profissional">
              <div className="profile-image-frame">
                <img src="/andre-flores.jpg" alt="Foto profissional de André Flores" />
              </div>
              <div>
                <strong>André Flores</strong>
                <span>Porto Alegre, RS</span>
              </div>
              <p>
                Desenvolvimento e evolução de sistemas com foco em qualidade técnica,
                segurança, escalabilidade e manutenção de longo prazo.
              </p>
              <div className="availability">Disponível para oportunidades remotas</div>
            </aside>
          </div>
        </section>

        <section id="sobre" className="section section-muted">
          <div className="container two-column">
            <div>
              <p className="section-kicker">Sobre mim</p>
              <h2>Experiência técnica aliada à análise de negócio.</h2>
            </div>
            <div className="body-copy">
              <p>
                Atuo no desenvolvimento, sustentação e modernização de aplicações web corporativas,
                participando desde a análise técnica até a publicação e acompanhamento em produção.
              </p>
              <p>
                Minha experiência inclui arquiteturas em camadas, integração com APIs, autenticação e
                autorização, modelagem de dados, otimização de consultas, configuração de IIS e diagnóstico
                de problemas em ambientes críticos.
              </p>
              <p>
                Mantenho estudo contínuo de novas tecnologias e de inteligência artificial aplicada ao
                desenvolvimento de software, com foco em produtividade, qualidade e decisões técnicas mais consistentes.
              </p>
            </div>
          </div>
        </section>

        <section id="competencias" className="section">
          <div className="container">
            <p className="section-kicker">Competências</p>
            <h2>Stack principal</h2>
            <div className="technology-grid" aria-label="Tecnologias principais">
              {technologies.map((technology) => (
                <span className="technology-chip" key={technology}>{technology}</span>
              ))}
            </div>

            <div className="expertise-grid">
              <article className="expertise-card">
                <span className="card-number">01</span>
                <h3>Backend e integrações</h3>
                <p>APIs, regras de negócio, autenticação, integrações externas e aplicações ASP.NET.</p>
              </article>
              <article className="expertise-card">
                <span className="card-number">02</span>
                <h3>Dados e performance</h3>
                <p>SQL Server, modelagem relacional, Entity Framework, Dapper e otimização de consultas.</p>
              </article>
              <article className="expertise-card">
                <span className="card-number">03</span>
                <h3>Frontend e experiência</h3>
                <p>Interfaces web e mobile com React, TypeScript e foco em usabilidade e manutenção.</p>
              </article>
              <article className="expertise-card">
                <span className="card-number">04</span>
                <h3>Operação e sustentação</h3>
                <p>IIS, publicação, configuração de ambientes e diagnóstico de incidentes em produção.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="portfolio" className="section section-muted">
          <div className="container">
            <div className="section-heading-row">
              <div>
                <p className="section-kicker">Portfólio</p>
                <h2>Projetos em destaque</h2>
              </div>
              <a className="text-link" href="https://github.com/V1-AndreFlores" target="_blank" rel="noreferrer">
                Ver GitHub
              </a>
            </div>

            <article className="project-card">
              <div className="project-visual">
                <img
                  className="project-image"
                  src="/lista-mercado-facil-portfolio.png"
                  alt="Apresentação do aplicativo Lista de Mercado Fácil"
                />
              </div>
              <div className="project-content">
                <div className="project-meta">
                  <span>Aplicativo mobile</span>
                  <span>Em desenvolvimento</span>
                </div>
                <h3>Lista de Mercado Fácil</h3>
                <p>
                  Aplicativo offline-first para organizar compras por setores e corredores de supermercados,
                  com cadastro de mercados, histórico, preferências locais e suporte a tema claro e escuro.
                </p>
                <ul className="project-features">
                  <li>React Native, Expo e TypeScript</li>
                  <li>Redux Toolkit, AsyncStorage e SQLite</li>
                  <li>Clean Architecture adaptada para mobile</li>
                  <li>Sem login obrigatório, anúncios ou monetização</li>
                </ul>
                <div className="project-actions">
                  <a className="button button-primary" href="https://github.com/V1-AndreFlores/lista-mercado-facil" target="_blank" rel="noreferrer">
                    Ver repositório
                  </a>
                  <a className="button button-secondary" href="/politica-de-privacidade/">
                    Política de Privacidade
                  </a>
                </div>
              </div>
            </article>

            <div className="future-projects">
              <article>
                <span>Próximo projeto</span>
                <h3>NexCart</h3>
                <p>Plataforma de e-commerce full stack com .NET, React e autenticação multifator.</p>
              </article>
              <article>
                <span>Próximo projeto</span>
                <h3>Última Missão</h3>
                <p>Projeto de jogo em Unity com ambientação sci-fi e sistemas de interação.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="contato" className="section contact-section">
          <div className="container contact-panel">
            <div>
              <p className="section-kicker">Contato</p>
              <h2>Vamos conversar sobre tecnologia e projetos.</h2>
              <p>
                Disponível para oportunidades como Analista Desenvolvedor .NET Sênior Full Stack,
                preferencialmente em formato remoto.
              </p>
            </div>
            <div className="contact-links">
              <a href="mailto:dr.andre.flores@gmail.com">
                <span>E-mail</span>
                <strong>dr.andre.flores@gmail.com</strong>
              </a>
              <a href="https://www.linkedin.com/in/andr%C3%A9-flores-33736021/" target="_blank" rel="noreferrer">
                <span>LinkedIn</span>
                <strong>Perfil profissional</strong>
              </a>
              <a href="https://github.com/V1-AndreFlores" target="_blank" rel="noreferrer">
                <span>GitHub</span>
                <strong>V1-AndreFlores</strong>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <span>© 2026 André Flores. Todos os direitos reservados.</span>
          <a href="/politica-de-privacidade/">Política de Privacidade</a>
        </div>
      </footer>
    </>
  );
}

export default App;
