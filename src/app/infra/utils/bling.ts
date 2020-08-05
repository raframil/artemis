import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios'
import servicesConfig from '../../../config/services'

export class BlingClient {
  protected readonly instance: AxiosInstance;
  protected readonly blingConfig = servicesConfig.pipedrive

  public constructor () {
    const baseUrl = this.blingConfig.baseUrl
    this.instance = axios.create({
      baseURL: baseUrl
    })

    this._initializeResponseInterceptor()
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.request.use(
      this._handleError,
      this._handleResponse
    )
  }

  private _handleRequest = (config: AxiosRequestConfig) => {
    config.headers = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }
    return config
  }

  private _handleResponse = ({ data }: AxiosResponse) => data;
  protected _handleError = (error: any) => Promise.reject(error);

  public async createOrder (body: any): Promise<AxiosResponse> {
    return this.instance.post('/pedido/json/', body)
  }
}
