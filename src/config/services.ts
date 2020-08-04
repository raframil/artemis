export default {
  pipedrive: {
    base_url: process.env.PIPEDRIVE_BASE_URL || 'https://api.pipedrive.com/v1',
    token: process.env.PIPEDRIVE_TOKEN
  },

  bling: {
    base_url: process.env.BLING_BASE_URL || 'https://bling.com.br/Api/v2',
    token: process.env.BLING_TOKEN
  }
}
