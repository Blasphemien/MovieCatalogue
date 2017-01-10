import { Injectable } from '@angular/core';
import {Jsonp} from "@angular/http";

@Injectable()
export class MovieService {
  apiKey: string;
  constructor(private _jsonp: Jsonp) {
    this.apiKey = '94a26a4e3ae5d82a3c426e5bec3150e5';
    console.log('MovieService Initilalized');
  }

}
