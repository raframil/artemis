export default {
  pipedrive: {
    baseUrl: process.env.PIPEDRIVE_BASE_URL || 'https://api.pipedrive.com/v1',
    token: process.env.PIPEDRIVE_TOKEN
  },

  bling: {
    baseUrl: process.env.BLING_BASE_URL || 'https://bling.com.br/Api/v2',
    token: process.env.BLING_TOKEN
  }
}
