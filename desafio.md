# Desafio fullstack Ton Stone

Você foi escolhido para fazer um app de venda de produtos para o Ton. Nós vendemos maquininhas, mas fique à vontade para vender o que você quiser. Sua API deve ao menos permitir que um administrador adicione um produto e retornar os produtos para o aplicativo. Você deverá contar os acessos do aplicativo utilizando a API https://countapi.xyz. Para criar o produto você pode usar o banco de dados e as bibliotecas que preferir, mas queremos que você saiba explicar sua escolha e como elas funcionam (de forma aprofundada, de preferência). Nesse desafio queremos entender seu conhecimento geral das tecnologias de backend e mobile e que você consiga explicar seu código.

## SUA TAREFA:

1. Criar uma rota para o admin consultar o número de acessos;

2. Criar uma rota para o admin criar um produto;

3. Criar uma rota para visualizar os produtos;

4. Criar uma tela de lista de produtos, com a possibilidade de adicionar e remover do carrinho (não precisa ter a opção de adicionar mais de 1 produto, mas fica à seu critério); 5. Ao clicar no ícone do carrinho no header o usuário deve ser direcionado para o tela de carrinho onde vai listar os produtos dele, tendo a opção de excluir um produto do carrinho; X. Fique à vontade para estender as funcionalidades para demonstrar seu conhecimento.

## INSTRUÇÕES

- Use versionamento (aqui no Ton seguimos essa convenção: https://www.conventionalcommits.org/en/v1.0.0/#summary)

- Mande o link do repositório ou um .zip caso você prefira (se conseguir entregar prints e/ou APK seria ótimo para avaliarmos a solução final)

- Seguimos o clean code, e gostaríamos de ver isso também:
  https://github.com/ryanmcdermott/clean-code-javascript

- Queremos uma entrega pronta para ir para produção, então pense em um sistema resiliente e na segurança do mesmo

- Qualquer solução será aceita e avaliada igual pois queremos entender seu conhecimento, mas seria interessante utilizar a mesma arquitetura que usamos, a Arquitetura Serverless (API Gateway + Lambda + DynamoDB)

- Se seu PC não roda o emulador legal, sugerimos usar o Expo (https://expo.io)

> Para o app reproduza o wireframe abaixo e utilize typescript. Não precisa se preocupar com a UI, não estamos avaliando isso no momento - mas vamos avaliar a UX. A lista de produtos deve ser carregada de um servidor - de preferência de um site/API público.

![Protótipo com duas telas de um aplicativo de loja virtual][prototipo.png]

## BÔNUS:

- Disponibilizar o desafio backend em algum servidor;

- Disponibilizar o app em .apk ou no expo;

- Escrever testes para os códigos (unitários, de integração e e2e); - Documentação (open-api, fluxogramas e etc).
