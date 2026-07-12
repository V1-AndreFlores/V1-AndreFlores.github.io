function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="container legal-header-content">
          <a className="brand" href="/" aria-label="Voltar ao site de André Flores">
            <span className="brand-mark">AF</span>
            <span>André Flores</span>
          </a>
          <a className="button button-secondary" href="/">Voltar ao portfólio</a>
        </div>
      </header>

      <main className="container legal-container">
        <div className="legal-title">
          <p className="section-kicker">Lista de Mercado Fácil</p>
          <h1>Política de Privacidade</h1>
          <p>Última atualização: 12 de julho de 2026</p>
        </div>

        <div className="legal-summary">
          <strong>Resumo</strong>
          <p>
            O Lista de Mercado Fácil não exige cadastro, não possui anúncios e não coleta,
            transmite ou compartilha dados pessoais. As informações do aplicativo permanecem
            armazenadas localmente no dispositivo do usuário.
          </p>
        </div>

        <article className="legal-content">
          <section>
            <h2>1. Identificação</h2>
            <p>
              Esta Política de Privacidade descreve como o aplicativo <strong>Lista de Mercado Fácil</strong>,
              desenvolvido por <strong>André Flores</strong>, trata as informações utilizadas durante o uso do aplicativo.
            </p>
          </section>

          <section>
            <h2>2. Dados coletados</h2>
            <p>O aplicativo não coleta dados pessoais ou dados pessoais sensíveis.</p>
            <p>Não são solicitados ou coletados:</p>
            <ul>
              <li>nome, endereço, telefone ou documentos;</li>
              <li>e-mail, conta de usuário ou credenciais de acesso;</li>
              <li>localização, contatos, câmera ou microfone;</li>
              <li>identificadores para publicidade ou rastreamento;</li>
              <li>informações financeiras ou dados de pagamento.</li>
            </ul>
          </section>

          <section>
            <h2>3. Informações armazenadas localmente</h2>
            <p>
              As listas de compras, produtos, mercados, setores, preferências, valores informados e histórico
              de compras são armazenados apenas no dispositivo do usuário, por meio de SQLite ou armazenamento local.
            </p>
            <p>
              Essas informações não são enviadas para servidores do desenvolvedor e não são utilizadas para
              identificar, monitorar ou criar perfis de usuários.
            </p>
          </section>

          <section>
            <h2>4. Compartilhamento de dados</h2>
            <p>
              O aplicativo não compartilha dados com terceiros, empresas de publicidade, plataformas de análise,
              redes sociais ou provedores de dados.
            </p>
          </section>

          <section>
            <h2>5. Serviços de terceiros</h2>
            <p>O aplicativo não utiliza serviços de:</p>
            <ul>
              <li>publicidade;</li>
              <li>rastreamento ou análise comportamental;</li>
              <li>Google Analytics ou Firebase Analytics;</li>
              <li>Firebase Crashlytics ou Sentry;</li>
              <li>sincronização em nuvem;</li>
              <li>login por redes sociais ou provedores externos.</li>
            </ul>
          </section>

          <section>
            <h2>6. Permissões do dispositivo</h2>
            <p>
              O aplicativo não precisa acessar localização, câmera, microfone, contatos ou arquivos pessoais
              para executar suas funcionalidades principais.
            </p>
          </section>

          <section>
            <h2>7. Segurança</h2>
            <p>
              Como os dados permanecem no dispositivo, a proteção dessas informações também depende dos mecanismos
              de segurança do próprio aparelho, como bloqueio de tela, criptografia e atualizações do sistema operacional.
            </p>
            <p>
              O aplicativo é desenvolvido seguindo práticas destinadas a reduzir acessos indevidos e exposição
              acidental das informações armazenadas localmente.
            </p>
          </section>

          <section>
            <h2>8. Retenção e exclusão</h2>
            <p>
              Os dados permanecem no dispositivo pelo período definido pelo próprio usuário. O aplicativo permite
              limpar listas e histórico conforme as opções disponíveis em suas configurações.
            </p>
            <p>
              A desinstalação do aplicativo normalmente remove os dados locais associados, conforme o comportamento
              do sistema operacional. Não existe uma conta remota ou base de dados do desenvolvedor que precise ser excluída.
            </p>
          </section>

          <section>
            <h2>9. Privacidade de crianças</h2>
            <p>
              O aplicativo não é direcionado especificamente a crianças e não coleta dados pessoais de usuários de nenhuma idade.
            </p>
          </section>

          <section>
            <h2>10. Alterações nesta política</h2>
            <p>
              Esta Política de Privacidade poderá ser atualizada para refletir mudanças no aplicativo, em requisitos legais
              ou nas práticas de tratamento de dados. A data da revisão mais recente será informada no início desta página.
            </p>
          </section>

          <section>
            <h2>11. Contato</h2>
            <p>Para dúvidas ou solicitações relacionadas à privacidade:</p>
            <p>
              <strong>Desenvolvedor:</strong> André Flores<br />
              <strong>E-mail:</strong>{' '}
              <a href="mailto:dr.andre.flores@gmail.com">dr.andre.flores@gmail.com</a>
            </p>
          </section>
        </article>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <span>© 2026 André Flores.</span>
          <a href="/">Portfólio</a>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
