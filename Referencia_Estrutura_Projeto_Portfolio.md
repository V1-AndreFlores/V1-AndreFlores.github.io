# Referência da Estrutura do Projeto — Portfólio André Flores

## 1. Objetivo

Este documento registra a estrutura técnica, as rotas, os pontos de manutenção e as decisões arquiteturais do site pessoal e portfólio publicado no GitHub Pages.

O site apresenta o perfil profissional de André Flores, os projetos em destaque, os canais de contato e as políticas de privacidade dos aplicativos publicados.

## 2. Stack

- React
- TypeScript
- Vite
- HTML e CSS responsivos
- GitHub Actions
- GitHub Pages

O projeto é uma aplicação estática. Não possui backend, banco de dados, autenticação ou API própria.

## 3. Endereços públicos

```text
Portfólio
https://v1-andreflores.github.io/

Índice de políticas
https://v1-andreflores.github.io/politica-de-privacidade/

Coruja — Sobre filmes e séries
https://v1-andreflores.github.io/politica-de-privacidade/coruja/

Lista de Mercado Fácil
https://v1-andreflores.github.io/politica-de-privacidade/lista-de-mercado-facil/

Finanças em Dia
https://v1-andreflores.github.io/politica-de-privacidade/financas-em-dia/
```

## 4. Estrutura principal

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── politica-de-privacidade/
│   ├── index.html
│   ├── coruja/
│   │   └── index.html
│   ├── financas-em-dia/
│   │   └── index.html
│   └── lista-de-mercado-facil/
│       └── index.html
├── public/
│   ├── andre-flores.jpg
│   ├── coruja-portfolio.png
│   ├── favicon.svg
│   ├── financas-em-dia-portfolio.png
│   └── lista-mercado-facil-portfolio.png
├── src/
│   ├── App.tsx
│   ├── PrivacyPolicy.tsx
│   ├── main.tsx
│   ├── privacy.tsx
│   ├── styles.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 5. Entradas da aplicação

### 5.1 Portfólio

- HTML: `index.html`
- Entrada React: `src/main.tsx`
- Componente principal: `src/App.tsx`

Responsabilidades do `App.tsx`:

- cabeçalho e navegação principal;
- tema claro e escuro;
- apresentação profissional;
- competências;
- cards dos projetos;
- contato e rodapé;
- links diretos para a política de cada aplicativo.

### 5.2 Políticas de Privacidade

As quatro páginas HTML de privacidade utilizam a mesma entrada React:

```text
src/privacy.tsx
```

O componente `src/PrivacyPolicy.tsx` identifica a página atual por `window.location.pathname` e exibe:

- o índice de políticas; ou
- a política do Coruja — Sobre filmes e séries; ou
- a política do Lista de Mercado Fácil; ou
- a política do Finanças em Dia.

Essa decisão evita duplicação de layout e de código de inicialização.

## 6. Rotas e responsabilidades

| Rota | Tipo | Conteúdo |
|---|---|---|
| `/` | Portfólio | Perfil, competências, projetos e contato |
| `/politica-de-privacidade/` | Índice | Seleção do aplicativo |
| `/politica-de-privacidade/coruja/` | Política | Documento específico do Coruja — Sobre filmes e séries |
| `/politica-de-privacidade/lista-de-mercado-facil/` | Política | Documento específico do Lista de Mercado Fácil |
| `/politica-de-privacidade/financas-em-dia/` | Política | Documento específico do Finanças em Dia |

As rotas são diretórios físicos com `index.html`, adequadas ao funcionamento estático do GitHub Pages e ao acesso direto com atualização do navegador.

## 7. Configuração do Vite

O `vite.config.ts` usa múltiplas entradas no `rollupOptions.input`:

```text
main
privacy
privacyCoruja
privacyListaMercadoFacil
privacyFinancasEmDia
```

Ao incluir uma nova página física, ela também deve ser adicionada ao objeto `input`. Caso contrário, o Vite pode não copiá-la corretamente para a pasta `dist` durante o build.

## 8. Tema

O tema é controlado pelo atributo:

```text
data-theme="light"
data-theme="dark"
```

A preferência é persistida no navegador pela chave:

```text
portfolio-theme
```

O portfólio e as páginas de privacidade usam a mesma chave, mantendo consistência visual durante a navegação.

## 9. Estilos

O arquivo `src/styles.css` concentra os estilos globais.

Principais grupos:

- variáveis de tema em `:root`;
- cabeçalho, navegação e botões;
- hero e apresentação profissional;
- competências;
- cards do portfólio;
- contato e rodapé;
- layout legal;
- índice de políticas;
- cards de seleção dos aplicativos;
- responsividade.

Classes específicas de privacidade:

```text
legal-page
legal-header
legal-container
legal-title
legal-summary
legal-content
legal-breadcrumbs
legal-bottom-navigation
privacy-app-grid
privacy-app-card
privacy-app-label
privacy-app-updated
```

## 10. Imagens públicas

As imagens devem ficar em `public` e são referenciadas a partir da raiz do site.

Exemplo:

```tsx
<img src="/coruja-portfolio.png" alt="Apresentação do aplicativo Coruja sobre filmes e séries" />
```

Não utilizar caminhos relativos a `src` para imagens que já estão em `public`.

## 11. Políticas de Privacidade

### 11.1 Coruja — Sobre filmes e séries

A política atual considera que:

- não existe cadastro, login, publicidade ou rastreamento comportamental;
- favoritos, lista Quero Assistir, histórico, tema e preferências permanecem no dispositivo;
- o aplicativo consulta a API TMDB para catálogo, buscas, detalhes, pessoas, trailers, imagens e provedores de streaming;
- termos de busca e filtros são transmitidos ao TMDB somente para retornar conteúdos correspondentes;
- favoritos, histórico e lista Quero Assistir não são enviados ao TMDB;
- trailers, serviços de streaming e outros links externos podem abrir ambientes de terceiros;
- o acesso à internet é necessário para as funcionalidades de catálogo;
- o aplicativo não solicita permissões sensíveis como localização precisa, contatos, câmera ou microfone.
- a política inclui o aviso oficial de atribuição exigido pelo TMDB.

### 11.2 Lista de Mercado Fácil

A política atual considera que:

- não existe cadastro ou login;
- não há publicidade ou rastreamento;
- listas, mercados, produtos, preferências, valores e histórico permanecem no dispositivo;
- não existe sincronização em nuvem;
- os dados podem ser removidos pelas funções do aplicativo ou pela desinstalação.

### 11.3 Finanças em Dia

A política atual considera que:

- não existe cadastro ou login remoto;
- receitas, despesas, contas, saldos, categorias e configurações permanecem no dispositivo;
- não existe sincronização financeira em nuvem;
- notificações são agendadas localmente;
- biometria é validada pelo sistema operacional;
- o aplicativo não acessa nem armazena modelos biométricos;
- o PIN permanece no armazenamento seguro do dispositivo;
- não há publicidade, análise comportamental ou rastreamento.

### 11.4 Regra obrigatória de revisão

As políticas devem ser revisadas antes de publicar uma versão que adicione qualquer um dos itens abaixo:

- autenticação ou cadastro online;
- sincronização ou backup em nuvem;
- API própria ou de terceiros para envio de dados;
- publicidade;
- analytics, telemetria ou crash reporting;
- compartilhamento ou exportação automática;
- novas permissões do dispositivo;
- integração bancária;
- processamento de pagamentos;
- alteração na forma de armazenamento ou exclusão dos dados.

A declaração da Google Play sobre segurança de dados deve permanecer coerente com o código efetivamente publicado e com a política disponibilizada no site.

## 12. Inclusão de um novo aplicativo

Para adicionar um aplicativo com política própria:

1. Criar o diretório:

```text
politica-de-privacidade/<slug-do-app>/index.html
```

2. Adicionar a entrada correspondente em `vite.config.ts`.
3. Criar uma nova definição em `src/PrivacyPolicy.tsx`.
4. Incluir a definição no array `policies`.
5. Adicionar o card do aplicativo em `src/App.tsx`.
6. Apontar o botão do card diretamente para a política específica.
7. Adicionar a imagem do projeto em `public`.
8. Executar `npm run check` e `npm run build`.
9. Conferir a estrutura gerada em `dist`.
10. Revisar o conteúdo jurídico conforme as funcionalidades reais do aplicativo.

## 13. Convenções

- Slugs em letras minúsculas e separados por hífen.
- URLs sempre com barra final.
- Componentes React em PascalCase.
- Arquivos de entrada em camelCase.
- Imagens públicas com nomes descritivos e em letras minúsculas.
- Textos das políticas em português claro e sem promessas incompatíveis com o código.
- Não duplicar páginas React para cada política; reutilizar o componente e a estrutura compartilhada.

## 14. Execução local

```bash
npm install
npm run dev
```

Endereços locais esperados:

```text
http://localhost:5173/
http://localhost:5173/politica-de-privacidade/
http://localhost:5173/politica-de-privacidade/coruja/
http://localhost:5173/politica-de-privacidade/lista-de-mercado-facil/
http://localhost:5173/politica-de-privacidade/financas-em-dia/
```

## 15. Validação

```bash
npm run check
npm run build
npm run preview
```

Após o build, conferir:

```text
dist/index.html
dist/politica-de-privacidade/index.html
dist/politica-de-privacidade/coruja/index.html
dist/politica-de-privacidade/lista-de-mercado-facil/index.html
dist/politica-de-privacidade/financas-em-dia/index.html
```

Também validar:

- navegação pelos cards do portfólio;
- acesso direto às quatro rotas de privacidade;
- tema claro e escuro;
- layout em desktop e dispositivos móveis;
- links de contato;
- conteúdo e data de atualização de cada política;
- ausência de erros no console do navegador.

## 16. Publicação

O workflow localizado em `.github/workflows/deploy.yml` executa a publicação no GitHub Pages após atualizações na branch principal.

Fluxo padrão:

```bash
git add .
git commit -m "Adiciona Coruja ao portfólio e às políticas de privacidade"
git push
```

Antes do push, executar o build local e confirmar que não houve regressão nas rotas estáticas.
