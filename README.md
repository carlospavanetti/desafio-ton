# Fluffy Store

Aplicativo e api desenvolvidos para o [desafio fullstack Ton Stone](desafio.md)

## Informações

Projeto da API está no diretório fluffy-store-backend, foi desenvolvido com o serverless framework para a stack AWS Lambda + DynamoDB, com endpoints expostos através do AWS API Gateway. Pode ser acessado à partir do endereço https://rw32403vl3.execute-api.us-east-1.amazonaws.com. Os endpoints são os seguintes:

| Método | caminho               | Funcionalidade                           | Autorização necessária   |
| ------ | --------------------- | ---------------------------------------- | ------------------------ |
| POST   | /dev/admin/sign_in    | Autenticação de usuário                  | Rota pública             |
| GET    | /dev/admin/accesses   | Informa quantos acessos o app teve       | Escopo `accesses:count`  |
| POST   | /dev/admin/images/url | Gera URL para upload de imagens          | Escopo `images:upload`   |
| POST   | /dev/admin/products   | Adiciona produto na base                 | Escopo `products:create` |
| GET    | /dev/products         | Lista produtos, com paginação por cursor | Rota pública             |
| GET    | /dev/accesses/hit     | Registra contagem de novo acesso ao app  | Rota pública             |

O aplicativo está no diretório fluffy-store-app, foi desenvolvido com React Native, Expo, React Navigation, Typescript e Redux Toolkit.
