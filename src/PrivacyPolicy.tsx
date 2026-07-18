import { useEffect, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

type PrivacyPolicySection = {
  title: string;
  content: ReactNode;
};

type PrivacyPolicyDefinition = {
  slug: string;
  appName: string;
  updatedAt: string;
  summary: string;
  indexDescription: string;
  sections: PrivacyPolicySection[];
};

const privacyBasePath = '/politica-de-privacidade';

const corujaPolicy: PrivacyPolicyDefinition = {
  slug: 'coruja',
  appName: 'Coruja — Sobre filmes e séries',
  updatedAt: '18 de julho de 2026',
  summary:
    'O Coruja não exige cadastro, não possui anúncios e não envia favoritos, itens da lista Quero Assistir ou histórico para servidores do desenvolvedor. O aplicativo consulta a API TMDB para apresentar informações públicas sobre filmes, séries, pessoas, trailers e disponibilidade de streaming.',
  indexDescription:
    'Política aplicável ao aplicativo de descoberta de filmes e séries, busca, detalhes, favoritos e disponibilidade de streaming.',
  sections: [
    {
      title: '1. Identificação',
      content: (
        <p>
          Esta Política de Privacidade descreve como o aplicativo{' '}
          <strong>Coruja — Sobre filmes e séries</strong>, desenvolvido por{' '}
          <strong>André Flores</strong>, trata as informações utilizadas durante o uso do
          aplicativo.
        </p>
      ),
    },
    {
      title: '2. Cadastro e dados pessoais',
      content: (
        <>
          <p>O aplicativo não exige cadastro, conta de usuário ou login.</p>
          <p>O desenvolvedor não solicita ou coleta diretamente:</p>
          <ul>
            <li>nome, endereço, telefone ou documentos de identificação;</li>
            <li>e-mail, senha ou credenciais de redes sociais;</li>
            <li>dados bancários, números de cartão ou informações de pagamento;</li>
            <li>contatos, localização precisa, câmera ou microfone;</li>
            <li>identificadores destinados a publicidade comportamental.</li>
          </ul>
        </>
      ),
    },
    {
      title: '3. Informações armazenadas localmente',
      content: (
        <>
          <p>
            Favoritos, itens da lista <strong>Quero Assistir</strong>, histórico de
            visualizações e buscas, tema e preferências do aplicativo podem ser armazenados
            localmente no dispositivo do usuário.
          </p>
          <p>
            Essas informações não são enviadas para servidores do desenvolvedor e não são
            utilizadas para criar perfis comerciais ou comportamentais.
          </p>
        </>
      ),
    },
    {
      title: '4. Consulta ao catálogo TMDB',
      content: (
        <>
          <p>
            O aplicativo utiliza a API do <strong>TMDB — The Movie Database</strong> para
            obter informações públicas sobre filmes, séries e pessoas, incluindo títulos,
            sinopses, imagens, gêneros, duração, elenco, equipe, trailers, tendências,
            lançamentos e disponibilidade de provedores de streaming.
          </p>
          <p>
            Para executar essas consultas, o dispositivo se comunica pela internet com os
            serviços do TMDB. Como ocorre em serviços online, o provedor pode processar dados
            técnicos necessários à conexão, como endereço IP, data, horário e informações da
            requisição, conforme suas próprias políticas.
          </p>
          <p>
            Favoritos, histórico e itens da lista Quero Assistir não são enviados ao TMDB pelo
            aplicativo.
          </p>
        </>
      ),
    },
    {
      title: '5. Buscas e filtros',
      content: (
        <>
          <p>
            Os termos digitados na busca e os filtros utilizados podem ser enviados ao TMDB
            somente para localizar filmes e séries correspondentes.
          </p>
          <p>
            A busca pode localizar produções por título ou pelo nome de pessoas participantes,
            mas o aplicativo apresenta como resultado os filmes e séries relacionados, sem
            criar perfis de usuário.
          </p>
        </>
      ),
    },
    {
      title: '6. Onde assistir e links externos',
      content: (
        <>
          <p>
            As informações de disponibilidade para assinatura, aluguel ou compra no Brasil são
            obtidas a partir dos dados de provedores disponibilizados pelo TMDB.
          </p>
          <p>
            Ao abrir trailers, serviços de streaming ou outros links externos, o usuário pode ser
            direcionado a aplicativos ou sites de terceiros. O tratamento de dados nesses
            ambientes é regido pelas políticas dos respectivos provedores.
          </p>
        </>
      ),
    },
    {
      title: '7. Compartilhamento de dados',
      content: (
        <p>
          O desenvolvedor não vende nem compartilha dados pessoais, favoritos, histórico ou
          preferências com anunciantes, redes sociais, corretores de dados ou plataformas de
          análise comportamental.
        </p>
      ),
    },
    {
      title: '8. Publicidade, análise e rastreamento',
      content: (
        <>
          <p>Na versão atual, o aplicativo não utiliza serviços de:</p>
          <ul>
            <li>publicidade ou personalização de anúncios;</li>
            <li>rastreamento entre aplicativos ou sites;</li>
            <li>Google Analytics ou Firebase Analytics;</li>
            <li>Firebase Crashlytics ou Sentry;</li>
            <li>login por redes sociais;</li>
            <li>sincronização de favoritos ou histórico em nuvem.</li>
          </ul>
        </>
      ),
    },
    {
      title: '9. Permissões e conexão com a internet',
      content: (
        <>
          <p>
            O acesso à internet é necessário para carregar o catálogo, executar buscas, exibir
            imagens, consultar detalhes, trailers e informações de disponibilidade.
          </p>
          <p>
            O aplicativo não precisa acessar localização precisa, contatos, câmera ou microfone
            para executar suas funções principais.
          </p>
        </>
      ),
    },
    {
      title: '10. Segurança',
      content: (
        <>
          <p>
            Como favoritos, histórico e preferências permanecem no dispositivo, sua proteção
            também depende dos mecanismos de segurança do aparelho, como bloqueio de tela,
            criptografia e atualizações do sistema operacional.
          </p>
          <p>
            As credenciais técnicas utilizadas para leitura da API são destinadas ao acesso ao
            catálogo e não representam uma conta pessoal do usuário.
          </p>
        </>
      ),
    },
    {
      title: '11. Retenção e exclusão',
      content: (
        <>
          <p>
            Os dados locais permanecem no dispositivo até serem removidos pelas funções
            disponíveis no aplicativo ou pela limpeza dos dados nas configurações do sistema.
          </p>
          <p>
            A desinstalação do aplicativo normalmente remove os dados locais associados, conforme
            o comportamento do sistema operacional. Não existe uma conta remota do usuário que
            precise ser excluída pelo desenvolvedor.
          </p>
        </>
      ),
    },
    {
      title: '12. Serviços da plataforma',
      content: (
        <p>
          A loja de aplicativos, o sistema operacional e os serviços externos acessados podem
          tratar informações técnicas para instalação, atualização, segurança, funcionamento da
          rede e entrega de conteúdo, conforme suas próprias políticas.
        </p>
      ),
    },
    {
      title: '13. Privacidade de crianças',
      content: (
        <p>
          O aplicativo não é direcionado especificamente a crianças e não coleta
          intencionalmente dados pessoais de usuários de nenhuma idade.
        </p>
      ),
    },
    {
      title: '14. Aviso sobre o TMDB',
      content: (
        <>
          <p>
            Este produto utiliza a API do TMDB, mas não é endossado nem certificado pelo TMDB.
          </p>
          <p lang="en">
            <strong>
              This product uses the TMDB API but is not endorsed or certified by TMDB.
            </strong>
          </p>
        </>
      ),
    },
    {
      title: '15. Alterações nesta política',
      content: (
        <p>
          Esta Política de Privacidade poderá ser atualizada para refletir mudanças no
          aplicativo, nos serviços externos utilizados ou em requisitos legais. A data da
          revisão mais recente será informada no início desta página.
        </p>
      ),
    },
    {
      title: '16. Contato',
      content: (
        <>
          <p>Para dúvidas ou solicitações relacionadas à privacidade:</p>
          <p>
            <strong>Desenvolvedor:</strong> André Flores
            <br />
            <strong>E-mail:</strong>{' '}
            <a href="mailto:dr.andre.flores@gmail.com">dr.andre.flores@gmail.com</a>
          </p>
        </>
      ),
    },
  ],
};

const listaMercadoFacilPolicy: PrivacyPolicyDefinition = {
  slug: 'lista-de-mercado-facil',
  appName: 'Lista de Mercado Fácil',
  updatedAt: '12 de julho de 2026',
  summary:
    'O Lista de Mercado Fácil não exige cadastro, não possui anúncios e não coleta, transmite ou compartilha dados pessoais. As informações do aplicativo permanecem armazenadas localmente no dispositivo do usuário.',
  indexDescription:
    'Política aplicável ao aplicativo de organização de listas de compras por mercados, setores e corredores.',
  sections: [
    {
      title: '1. Identificação',
      content: (
        <p>
          Esta Política de Privacidade descreve como o aplicativo{' '}
          <strong>Lista de Mercado Fácil</strong>, desenvolvido por <strong>André Flores</strong>,
          trata as informações utilizadas durante o uso do aplicativo.
        </p>
      ),
    },
    {
      title: '2. Dados coletados',
      content: (
        <>
          <p>O aplicativo não coleta dados pessoais ou dados pessoais sensíveis.</p>
          <p>Não são solicitados ou coletados:</p>
          <ul>
            <li>nome, endereço, telefone ou documentos;</li>
            <li>e-mail, conta de usuário ou credenciais de acesso;</li>
            <li>localização, contatos, câmera ou microfone;</li>
            <li>identificadores para publicidade ou rastreamento;</li>
            <li>informações financeiras ou dados de pagamento.</li>
          </ul>
        </>
      ),
    },
    {
      title: '3. Informações armazenadas localmente',
      content: (
        <>
          <p>
            As listas de compras, produtos, mercados, setores, preferências, valores informados e
            histórico de compras são armazenados apenas no dispositivo do usuário, por meio de
            SQLite ou armazenamento local.
          </p>
          <p>
            Essas informações não são enviadas para servidores do desenvolvedor e não são
            utilizadas para identificar, monitorar ou criar perfis de usuários.
          </p>
        </>
      ),
    },
    {
      title: '4. Compartilhamento de dados',
      content: (
        <p>
          O aplicativo não compartilha dados com terceiros, empresas de publicidade, plataformas
          de análise, redes sociais ou provedores de dados.
        </p>
      ),
    },
    {
      title: '5. Serviços de terceiros',
      content: (
        <>
          <p>O aplicativo não utiliza serviços de:</p>
          <ul>
            <li>publicidade;</li>
            <li>rastreamento ou análise comportamental;</li>
            <li>Google Analytics ou Firebase Analytics;</li>
            <li>Firebase Crashlytics ou Sentry;</li>
            <li>sincronização em nuvem;</li>
            <li>login por redes sociais ou provedores externos.</li>
          </ul>
        </>
      ),
    },
    {
      title: '6. Permissões do dispositivo',
      content: (
        <p>
          O aplicativo não precisa acessar localização, câmera, microfone, contatos ou arquivos
          pessoais para executar suas funcionalidades principais.
        </p>
      ),
    },
    {
      title: '7. Segurança',
      content: (
        <>
          <p>
            Como os dados permanecem no dispositivo, a proteção dessas informações também depende
            dos mecanismos de segurança do próprio aparelho, como bloqueio de tela, criptografia e
            atualizações do sistema operacional.
          </p>
          <p>
            O aplicativo é desenvolvido seguindo práticas destinadas a reduzir acessos indevidos e
            exposição acidental das informações armazenadas localmente.
          </p>
        </>
      ),
    },
    {
      title: '8. Retenção e exclusão',
      content: (
        <>
          <p>
            Os dados permanecem no dispositivo pelo período definido pelo próprio usuário. O
            aplicativo permite limpar listas e histórico conforme as opções disponíveis em suas
            configurações.
          </p>
          <p>
            A desinstalação do aplicativo normalmente remove os dados locais associados, conforme o
            comportamento do sistema operacional. Não existe uma conta remota ou base de dados do
            desenvolvedor que precise ser excluída.
          </p>
        </>
      ),
    },
    {
      title: '9. Privacidade de crianças',
      content: (
        <p>
          O aplicativo não é direcionado especificamente a crianças e não coleta dados pessoais de
          usuários de nenhuma idade.
        </p>
      ),
    },
    {
      title: '10. Alterações nesta política',
      content: (
        <p>
          Esta Política de Privacidade poderá ser atualizada para refletir mudanças no aplicativo,
          em requisitos legais ou nas práticas de tratamento de dados. A data da revisão mais
          recente será informada no início desta página.
        </p>
      ),
    },
    {
      title: '11. Contato',
      content: (
        <>
          <p>Para dúvidas ou solicitações relacionadas à privacidade:</p>
          <p>
            <strong>Desenvolvedor:</strong> André Flores
            <br />
            <strong>E-mail:</strong>{' '}
            <a href="mailto:dr.andre.flores@gmail.com">dr.andre.flores@gmail.com</a>
          </p>
        </>
      ),
    },
  ],
};

const financasEmDiaPolicy: PrivacyPolicyDefinition = {
  slug: 'financas-em-dia',
  appName: 'Finanças em Dia',
  updatedAt: '16 de julho de 2026',
  summary:
    'O Finanças em Dia não exige cadastro, não possui anúncios e mantém os dados financeiros informados pelo usuário armazenados localmente no dispositivo. O aplicativo não envia receitas, despesas, contas, saldos ou demais lançamentos para servidores do desenvolvedor.',
  indexDescription:
    'Política aplicável ao aplicativo de controle financeiro pessoal, receitas, despesas, contas e ciclos financeiros.',
  sections: [
    {
      title: '1. Identificação',
      content: (
        <p>
          Esta Política de Privacidade descreve como o aplicativo <strong>Finanças em Dia</strong>,
          desenvolvido por <strong>André Flores</strong>, trata as informações utilizadas durante o
          uso do aplicativo.
        </p>
      ),
    },
    {
      title: '2. Natureza dos dados registrados',
      content: (
        <>
          <p>
            Para executar suas funções, o aplicativo permite que o próprio usuário registre dados
            relacionados à sua organização financeira pessoal, como:
          </p>
          <ul>
            <li>receitas, despesas e respectivos valores;</li>
            <li>datas, descrições, situações e categorias de lançamentos;</li>
            <li>contas, saldos iniciais e ciclos financeiros;</li>
            <li>recorrências, parcelas, filtros e preferências de visualização;</li>
            <li>configurações de tema, notificações e proteção de acesso.</li>
          </ul>
          <p>
            Esses registros são inseridos voluntariamente pelo usuário para utilização das funções
            do aplicativo. Eles não são coletados pelo desenvolvedor nem utilizados para criar
            perfis comerciais ou comportamentais.
          </p>
        </>
      ),
    },
    {
      title: '3. Dados pessoais e cadastro',
      content: (
        <>
          <p>O aplicativo não exige cadastro, conta de usuário ou login remoto.</p>
          <p>Não são solicitados pelo aplicativo:</p>
          <ul>
            <li>nome, endereço, telefone ou documentos de identificação;</li>
            <li>e-mail ou senha de conta online;</li>
            <li>dados bancários para conexão com instituições financeiras;</li>
            <li>número de cartão, credenciais bancárias ou dados de pagamento;</li>
            <li>identificadores para publicidade ou rastreamento.</li>
          </ul>
        </>
      ),
    },
    {
      title: '4. Armazenamento local',
      content: (
        <>
          <p>
            As informações financeiras e as configurações do aplicativo são armazenadas localmente
            no dispositivo do usuário. Em Android e iOS, a persistência principal utiliza SQLite;
            no ambiente Web/local, utiliza armazenamento local compatível com a aplicação.
          </p>
          <p>
            Na versão atual, não existe sincronização em nuvem, conta remota ou banco de dados do
            desenvolvedor contendo os registros financeiros do usuário.
          </p>
        </>
      ),
    },
    {
      title: '5. Compartilhamento e transmissão',
      content: (
        <p>
          O aplicativo não transmite ou compartilha receitas, despesas, contas, saldos, categorias,
          lançamentos ou configurações com o desenvolvedor, empresas de publicidade, plataformas de
          análise, redes sociais ou provedores de dados.
        </p>
      ),
    },
    {
      title: '6. Publicidade, análise e rastreamento',
      content: (
        <>
          <p>Na versão atual, o aplicativo não utiliza serviços de:</p>
          <ul>
            <li>publicidade ou personalização de anúncios;</li>
            <li>rastreamento entre aplicativos ou sites;</li>
            <li>análise comportamental ou criação de perfis;</li>
            <li>Google Analytics ou Firebase Analytics;</li>
            <li>sincronização de dados financeiros em nuvem;</li>
            <li>login por redes sociais ou provedores externos.</li>
          </ul>
        </>
      ),
    },
    {
      title: '7. Notificações locais',
      content: (
        <>
          <p>
            O aplicativo pode solicitar permissão para exibir notificações relacionadas a despesas
            pendentes e outros lembretes configurados pelo usuário.
          </p>
          <p>
            Essas notificações são programadas localmente no dispositivo. O conteúdo financeiro não
            é enviado a um servidor do desenvolvedor para que o lembrete seja exibido.
          </p>
          <p>
            A permissão pode ser recusada ou revogada nas configurações do sistema operacional sem
            impedir o uso das demais funções principais do aplicativo.
          </p>
        </>
      ),
    },
    {
      title: '8. Biometria e PIN',
      content: (
        <>
          <p>
            Quando a proteção por biometria estiver habilitada, a validação é executada pelo recurso
            de autenticação do sistema operacional. O aplicativo não acessa, armazena ou transmite
            impressão digital, imagem facial ou modelo biométrico.
          </p>
          <p>
            O aplicativo recebe apenas o resultado da autenticação fornecido pelo sistema. Quando o
            usuário optar por PIN, a informação de proteção permanece no armazenamento seguro do
            próprio dispositivo e não é enviada ao desenvolvedor.
          </p>
        </>
      ),
    },
    {
      title: '9. Permissões do dispositivo',
      content: (
        <p>
          O aplicativo utiliza somente permissões relacionadas às funcionalidades disponibilizadas,
          como notificações e autenticação local. Ele não precisa acessar contatos, localização,
          câmera ou microfone para executar suas funções principais.
        </p>
      ),
    },
    {
      title: '10. Segurança e responsabilidade do usuário',
      content: (
        <>
          <p>
            Como os registros permanecem no dispositivo, sua proteção também depende dos mecanismos
            de segurança do aparelho, incluindo bloqueio de tela, criptografia, atualizações do
            sistema operacional e controle de acesso físico.
          </p>
          <p>
            O usuário deve manter o dispositivo protegido e evitar compartilhar seu PIN. O
            aplicativo é desenvolvido seguindo práticas destinadas a reduzir acessos indevidos e
            exposição acidental dos dados locais.
          </p>
        </>
      ),
    },
    {
      title: '11. Retenção e exclusão',
      content: (
        <>
          <p>
            Os registros permanecem no dispositivo até que sejam alterados ou excluídos pelo usuário
            por meio das funções disponíveis no aplicativo.
          </p>
          <p>
            A redefinição dos dados locais e a desinstalação do aplicativo normalmente removem as
            informações associadas, conforme o comportamento do sistema operacional. Não existe uma
            conta remota ou base de dados financeira do desenvolvedor que precise ser excluída.
          </p>
        </>
      ),
    },
    {
      title: '12. Serviços da plataforma',
      content: (
        <p>
          A loja de aplicativos e o sistema operacional podem tratar informações técnicas conforme
          suas próprias políticas, por exemplo para instalação, atualização, segurança e diagnóstico
          da plataforma. Esse tratamento é realizado pelos respectivos provedores e não corresponde
          à coleta de dados financeiros pelo aplicativo ou pelo desenvolvedor.
        </p>
      ),
    },
    {
      title: '13. Privacidade de crianças',
      content: (
        <p>
          O aplicativo não é direcionado especificamente a crianças e não coleta intencionalmente
          dados pessoais de usuários de nenhuma idade.
        </p>
      ),
    },
    {
      title: '14. Alterações nesta política',
      content: (
        <p>
          Esta Política de Privacidade poderá ser atualizada para refletir mudanças no aplicativo,
          em requisitos legais ou nas práticas de tratamento de dados. A data da revisão mais
          recente será informada no início desta página.
        </p>
      ),
    },
    {
      title: '15. Contato',
      content: (
        <>
          <p>Para dúvidas ou solicitações relacionadas à privacidade:</p>
          <p>
            <strong>Desenvolvedor:</strong> André Flores
            <br />
            <strong>E-mail:</strong>{' '}
            <a href="mailto:dr.andre.flores@gmail.com">dr.andre.flores@gmail.com</a>
          </p>
        </>
      ),
    },
  ],
};

const policies = [corujaPolicy, financasEmDiaPolicy, listaMercadoFacilPolicy] as const;

function getInitialTheme(): Theme {
  const storedTheme = localStorage.getItem('portfolio-theme');
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function normalizePath(pathname: string): string {
  const normalized = pathname.replace(/\/+$/, '');
  return normalized.length > 0 ? normalized : '/';
}

function resolvePolicy(pathname: string): PrivacyPolicyDefinition | null {
  const normalizedPath = normalizePath(pathname);
  return policies.find((policy) => normalizedPath.endsWith(`/${policy.slug}`)) ?? null;
}

function LegalHeader({
  theme,
  onToggleTheme,
  showPoliciesLink,
}: {
  theme: Theme;
  onToggleTheme: () => void;
  showPoliciesLink: boolean;
}) {
  return (
    <header className="legal-header">
      <div className="container legal-header-content">
        <a className="brand" href="/" aria-label="Voltar ao site de André Flores">
          <span className="brand-mark">AF</span>
          <span>André Flores</span>
        </a>

        <div className="legal-header-actions">
          {showPoliciesLink ? (
            <a className="button button-secondary" href={`${privacyBasePath}/`}>
              Todas as políticas
            </a>
          ) : null}
          <a className="button button-secondary" href="/">
            Voltar ao portfólio
          </a>
          <button
            className="theme-button"
            type="button"
            aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
            onClick={onToggleTheme}
          >
            {theme === 'dark' ? 'Tema claro' : 'Tema escuro'}
          </button>
        </div>
      </div>
    </header>
  );
}

function PrivacyPolicyIndex() {
  return (
    <main className="container legal-container privacy-index-container">
      <div className="legal-title">
        <p className="section-kicker">Aplicativos de André Flores</p>
        <h1>Políticas de Privacidade</h1>
        <p>Selecione o aplicativo para consultar a política correspondente.</p>
      </div>

      <div className="legal-summary">
        <strong>Privacidade por aplicativo</strong>
        <p>
          Cada página descreve de forma específica quais informações são utilizadas, onde os dados
          ficam armazenados e quais recursos do dispositivo podem ser solicitados.
        </p>
      </div>

      <section className="privacy-app-grid" aria-label="Aplicativos com política de privacidade">
        {policies.map((policy) => (
          <article className="privacy-app-card" key={policy.slug}>
            <span className="privacy-app-label">Aplicativo mobile</span>
            <h2>{policy.appName}</h2>
            <p>{policy.indexDescription}</p>
            <span className="privacy-app-updated">Atualizada em {policy.updatedAt}</span>
            <a
              className="button button-primary privacy-app-action"
              href={`${privacyBasePath}/${policy.slug}/`}
              aria-label={`Consultar Política de Privacidade do ${policy.appName}`}
            >
              Consultar política
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}

function PrivacyPolicyDocument({ policy }: { policy: PrivacyPolicyDefinition }) {
  return (
    <main className="container legal-container">
      <nav className="legal-breadcrumbs" aria-label="Navegação estrutural">
        <a href={`${privacyBasePath}/`}>Políticas de Privacidade</a>
        <span aria-hidden="true">/</span>
        <span>{policy.appName}</span>
      </nav>

      <div className="legal-title">
        <p className="section-kicker">{policy.appName}</p>
        <h1>Política de Privacidade</h1>
        <p>Última atualização: {policy.updatedAt}</p>
      </div>

      <div className="legal-summary">
        <strong>Resumo</strong>
        <p>{policy.summary}</p>
      </div>

      <article className="legal-content">
        {policy.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.content}
          </section>
        ))}
      </article>

      <nav className="legal-bottom-navigation" aria-label="Navegação entre políticas">
        <a className="button button-secondary" href={`${privacyBasePath}/`}>
          Ver todas as políticas
        </a>
        <a className="button button-primary" href="/#portfolio">
          Voltar aos aplicativos
        </a>
      </nav>
    </main>
  );
}

function PrivacyFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <span>© 2026 André Flores. Todos os direitos reservados.</span>
        <div className="legal-footer-links">
          <a href={`${privacyBasePath}/`}>Políticas de Privacidade</a>
          <a href="/">Portfólio</a>
        </div>
      </div>
    </footer>
  );
}

function PrivacyPolicy() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const policy = resolvePolicy(window.location.pathname);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const title = policy
      ? `Política de Privacidade | ${policy.appName}`
      : 'Políticas de Privacidade | André Flores';
    const description = policy
      ? `Política de Privacidade do aplicativo ${policy.appName}.`
      : 'Políticas de Privacidade dos aplicativos desenvolvidos por André Flores.';

    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [policy]);

  return (
    <div className="legal-page">
      <LegalHeader
        theme={theme}
        showPoliciesLink={policy !== null}
        onToggleTheme={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
      />
      {policy ? <PrivacyPolicyDocument policy={policy} /> : <PrivacyPolicyIndex />}
      <PrivacyFooter />
    </div>
  );
}

export default PrivacyPolicy;
