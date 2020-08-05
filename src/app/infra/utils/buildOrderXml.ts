import js2xmlparser from 'js2xmlparser'

export class BuildOrder {
  async build (deal: any) {
    const order = [{
      cliente: {
        nome: deal.name,
        tipoPessoa: 'J',
        cpf_cnpj: deal.cnpj ? deal.cnpj : '',
        ie_rg: deal.inscricaoEstadual ? deal.inscricaoEstadual : '',
        endereco: deal.address,
        numero: deal.address_street_number,
        bairro: deal.address_sublocality,
        cep: deal.address_postal_code,
        cidade: deal.address_admin_area_level_2,
        uf: deal.address_admin_area_level_1,
        email: deal.cc_email
      },
      itens: [{
        codigo: '001',
        descricao: deal.title,
        un: 'un',
        qtde: 1,
        vlr_unit: deal.value
      }]
    }]
    const orderXml = js2xmlparser.parse('pedido', order[0])
    console.log(orderXml)
    return orderXml
  }
}
