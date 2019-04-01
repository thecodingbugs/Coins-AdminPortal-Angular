import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Get method 
   * @param url the resource path 
   */
  HttpGet(url: string) {
    return this.httpClient.get(url);
  }


  /**
   * Post method
   * @param url the resource path
   * @param params request body params
   */
  HttpPost(url: string, params: any) {
    return this.httpClient.post(url, params);
  }
}
