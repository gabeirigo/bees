import axios, { AxiosInstance } from "axios";

class Http {
  axios: AxiosInstance;

  constructor() {
    let config = {
      baseURL: 'https://api.openbrewerydb.org',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      timeout: 300000,
    };
    this.axios = axios.create(config);
    this.configInterceptors();
  }

  get(resource: string, params?: any) {
    return this.axios.get(resource, params);
  }

  post(resource: string, params?: any) {
    return this.axios.post(resource, params);
  }

  delete(resource: string, params?: any) {
    return this.axios.delete(resource, { data: params });
  }

  put(resource: string, params?: any) {
    return this.axios.put(resource, params);
  }

  configInterceptors = () => {
    this.axios.interceptors.request.use(this.reqConfig);
    this.axios.interceptors.response.use((res) => res, this.resErrorHandler);
  };

  reqConfig = (config: any) => {
    const token = sessionStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return Promise.resolve(config);
  };

  resHandle = (response: any) => {
    if (response.data) {
      let data = response.data;
      if (data.erro) throw (data.message + " : " + JSON.stringify(data.result)).toString();
      return data.result;
    }
  };

  resErrorHandler = (error: any) => {
    if (!error.response) {
      throw error;
    }
    return Promise.reject(error);
  };
}

export default new Http();
