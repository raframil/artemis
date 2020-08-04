# Artemis

## Exemplo de arquivo .env

```
PORT=5000
PIPEDRIVE_API_KEY=chave-pipedrive
BLING_API_KEY=chave-bling
```

## Requisitos

- Criar contas testes nas plataformas Pipedrive e Bling.
- Criar uma integração entre as plataformas Pipedrive e Bling. - A integração deve buscar as oportunidades com status igual a **ganho** no Pipedrive, depois inseri-las como pedido no Bling
- Criar um banco de dados MongoDB Atlas
- Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.
- Criar endpoint para trazer os dados consolidados da collection do MongoDB.

