import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export class HttpService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_PUBLIC_API_URL,
    });

    this.initializeInterceptors();
  }

  private initializeInterceptors(): void {
    this.instance.interceptors.request.use(
      this.handleRequest,
      this.handleError,
    );

    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError,
    );
  }

  private handleRequest(
    config: AxiosRequestConfig,
  ): InternalAxiosRequestConfig {
    return config as InternalAxiosRequestConfig;
  }

  private handleResponse(response: AxiosResponse): AxiosResponse {
    return response;
  }

  private handleError(error: AxiosError): Promise<never> {
    return Promise.reject(error);
  }

  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.instance.post<T>(url, data, config);
    return response.data;
  }
}
