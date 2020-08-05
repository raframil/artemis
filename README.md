# Artemis

Este projeto é um teste para realizar a integração entre duas APIs, sendo uma do Pipedrive e a outro do Bling!. A integração deve buscar oportunidades no Pipedrive com status de ganho, recuperar as informações e inseri-las como pedidos no Bling. Além de inserir as informações em outra API, é necessário persisti-las em um banco de dados MongoDB, agregando as oportunidades por dia e valor total. Deve haver um endpoint para consulta dos dados da collection.

## Exemplo de arquivo .env

```
PORT=5000
PIPEDRIVE_API_KEY=chave_pipedrive
BLING_API_KEY=chave_bling
MONGO_URL=url_do_banco_de_dados
```

## Requisitos

- Criar contas testes nas plataformas Pipedrive e Bling.
- Criar uma integração entre as plataformas Pipedrive e Bling. - A integração deve buscar as oportunidades com status igual a **ganho** no Pipedrive, depois inseri-las como pedido no Bling
- Criar um banco de dados MongoDB Atlas
- Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.
- Criar endpoint para trazer os dados consolidados da collection do MongoDB.

## APIs construídas

O projeto possui 2 endpoints com os métodos **POST** e **GET**:

> Endpoint de integração

- Endpoint: `http://localhost:5000/deals`
  - Método: **GET**
  - Funcionalidade: Executa uma chamada **[Pipedrive](https://www.pipedrive.com/)** e retorna todas as oportunidades com status igual a **ganho**.

- Endpoint: `http://localhost:5000/deals`
  - Método **POST**
  - Funcionalidade: 
    - Executa uma chamada **[Pipedrive](https://www.pipedrive.com/)** recuperando todas as oportunidades com status igual a **ganho**.
    - Insere os negócios identificados no Pipedrive como pedidos no **[Bling](https://www.bling.com.br/home)**. 
    - Armazena os pedidos em uma collection no MongoDB.

> Endpoint de agregação

- Endpoint: `http://localhost:5000/deals/saved`
  - Método: **GET**
  - Funcionalidade: Executa uma chamada ao banco de dados MongoDb agregando todos os pedidos persistidos.
    - Pode receber um parâmetro date na url. Não foi implementado, mas em um possível cenário a busca ocorreria apenas pela data fornecida.
    - Agrega todos os pedidos por dias, somando a quantidade de pedidos e o valor de cada um deles.
    - Caso não exista pedidos no banco, retornará o status 204.


## Diagrams

> ### Get deals from Pipedrive diagram

![get deals diagram](/requirements/get-deals.png)

> ### Integration Pipedrive/Bling/MongoDb

![integration diagram](/requirements/bling-diagram.png)

> ### Aggregate Deals

![aggregate diagram](/requirements/aggregate-deals.png)

## Design Patterns

* Factory
* Adapter
* Dependency Injection
* Decorator

## Bibliotecas e Ferramentas

* NPM
* Typescript
* Git
* Axios
* MongoDb
* Mongoose
* Eslint
* Express
* Standard Javascript Style
* Ts node dev
* js2xmlparser