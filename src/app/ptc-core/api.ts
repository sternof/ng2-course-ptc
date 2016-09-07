
import {Http} from "@angular/http";

export class Api {

  private http: Http;
  private BASE_URL: string;

  constructor(_http: Http) {
    this.http = _http;
  }

  setBaseUrl(url){
    this.BASE_URL = url;
  }

  get(resource){
    return this.http.get(`${this.BASE_URL}/${resource}`);
  }
}