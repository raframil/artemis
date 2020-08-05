const js2xmlparser = require('js2xmlparser')

export class BuildOrder {
  async build(deal: any) {
    const order = {
      pedido: {
        cliente: {
          nome: deal.clientName,
          tipoPessoa: 'J',
          email: deal.email,
        },
        itens: [
          {
            item: {
              codigo: '001',
              descricao: deal.title,
              un: 'un',
              qtde: 1,
              vlr_unit: deal.value,
            },
          },
        ]
      }
    };

    const orderXml = js2xmlparser.parse('raiz', order, { declaration: { encoding: 'UTF-8' } })
    return orderXml
  }
}
