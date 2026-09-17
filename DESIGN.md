# Portfólio de Artur Pereira

## Direção visual

Referência: https://www.karolortyl.com/?ref=minimal.gallery. A composição aproveita o espaço negativo, a abertura marcante e a navegação flutuante da referência. A identidade própria vem do piano interativo, construído com elementos nativos da página, sem modelo 3D ou imagem externa.

- Paleta: palco `#101112`, marfim `#f0f0ed`, cinza `#a3a5a4`, divisórias `#323435`, superfície `#1c1e1f`. O tema claro inverte a hierarquia com fundo `#f6f6f4`.
- Tipografia: Outfit para nome e títulos; DM Sans para textos e navegação. Georgia apenas na assinatura do instrumento.
- Composição: abertura centralizada com nome e piano; biografia e trajetória alinhadas à esquerda; projetos em duas colunas. No celular, o conteúdo segue uma única coluna e o teclado mostra menos oitavas para preservar a interação.
- Princípio: o piano é o elemento memorável. Experiências usam datas e divisórias; os projetos usam suas imagens reais. Sem animações contínuas ou reprodução automática de áudio.

## Conteúdo

Fonte das atualizações: currículo `CV - PTBR.pdf` fornecido pelo proprietário em setembro de 2026. Dados profissionais e projetos ficam em `src/data.js`. O Simulador do Brasileirão foi preservado do portfólio anterior. As premiações olímpicas ficam agrupadas porque o currículo não associa explicitamente cada medalha a uma olimpíada.

O PDF original atualizado está disponível em `public/Artur-Pereira-CV-PTBR.pdf`; não foi alterado.

## Interação e acessibilidade

O áudio só começa após tocar uma tecla com mouse, toque ou teclado; não há reprodução automática. Cada uma das 36 notas possui um atalho físico exclusivo, impresso na tecla. O teclado funciona enquanto o instrumento está na tela e ignora campos de texto e combinações de sistema. É possível segurar notas e tocar acordes; perder o foco ou sair da área do piano libera todas as notas. Botões têm rótulos de nota e oitava, foco visível e suporte de teclado. A breve entrada do título respeita a preferência por movimento reduzido.

Rotas anteriores continuam disponíveis, com experiência completa também na página inicial. A preferência de tema é salva localmente.

## Scroll musical

As seções entram como a abertura da tampa de um piano, acompanhadas por uma divisória que lembra o teclado. A revelação acontece uma vez por visita. No encerramento, linhas de pauta e teclas acompanham o scroll enquanto AP. se expande em Artur Pereira. Movimento reduzido exibe os conteúdos e a assinatura completos.
