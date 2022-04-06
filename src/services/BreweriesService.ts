import axios, { AxiosResponse } from "axios";
import Brewery from "../models/Brewery";
import Http from "../utils/Http";
import HttpStatusCode from "../utils/HttpStatusCode";

class BreweriesService {

  private readonly resource = '/breweries'

  async getBreweries(): Promise<Brewery[] | undefined> {
    try {
      const response = await Http.get(this.resource);
      if (response.status === HttpStatusCode.OK && response.data) {
        return response.data;
      }
    } catch (e) {
      console.error(e)
    }
  }

  async deleteBrewery(id: number): Promise<Brewery[] | undefined> {
    try {
      const response = await Http.delete(`${this.resource}/${id}`);
      if (response.status === HttpStatusCode.OK && response.data) {
        return response.data;
      }
    } catch (e) {
      console.error(e)
    }
  }
}

export default new BreweriesService();