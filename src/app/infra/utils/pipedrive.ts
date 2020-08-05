import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import config from '../../../config/services'

export class PipedriveClient {
  protected readonly instance: AxiosInstance;
  protected readonly pipedriveConfig = config.pipedrive

  public constructor () {
    const baseUrl = this.pipedriveConfig.baseUrl
    this.instance = axios.create({
      baseURL: baseUrl
    })

    this._initializeResponseInterceptor()
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleError
    )
  }

  private _handleRequest = (config: AxiosRequestConfig) => {
    config.params = {
      ...config.params,
      api_token: this.pipedriveConfig.token
    }
    return config
  }

  protected _handleError = (error: any) => Promise.reject(error);

  public async getDeals (params: any): Promise<AxiosResponse> {
    return this.instance.get('/deals/', params)
  }
}
