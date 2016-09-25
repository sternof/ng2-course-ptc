import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class Network {

  private http: Http;
  private BASE_URL: string;

  constructor(http: Http) {
    this.http = http;
    this.BASE_URL = "localHost"
  }

  get(endpoint){
    return this.http.get(`${this.BASE_URL}/${endpoint}`)
  }

}