# Artemis

Este projeto é um teste para realizar a integração entre duas APIs, sendo uma do Pipedrive e a outro do Bling!. A integração deve buscar oportunidades no Pipedrive com status de ganho, recuperar as informações e inseri-las como pedidos no Bling. Além de inserir as informações em outra API, é necessário persisti-las em um banco de dados MongoDB, agregando as oportunidades por dia e valor total. Deve haver um endpoint para consulta dos dados da collection.

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


### Get deals from Pipedrive diagram

![get deals diagram](/requirements/get-deals.png)