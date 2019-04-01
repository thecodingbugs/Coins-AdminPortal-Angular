import { Injectable } from '@angular/core';
import { HttpClientService } from './httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClientService: HttpClientService) { }

  Login(params: any) {
    var path = "";
    return this.httpClientService.HttpPost(path, params);
  }
}
