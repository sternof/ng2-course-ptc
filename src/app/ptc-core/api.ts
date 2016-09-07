import {Injectable} from '@angular/core';

import {Http} from "@angular/http";

@Injectable()
export class Api {

  private http: Http;

  constructor(_http: Http) {
    this.http = _http;
  }

  get(url){
    return this.http.get(url);
  }

}