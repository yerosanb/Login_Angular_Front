import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private url = (window as { [key: string]: any })["cfgApiBaseUrl"] as string + '/api/auth/';
  private url2 = (window as { [key: string]: any })["cfgApiBaseUrl"] as string + '/api/fixedAsset/recon/';
  constructor(private httpClient: HttpClient) { }
  
  checkAccessTokenDoesNotExpired() {
    return this.httpClient.post<Boolean>(this.url + 'token-not-expired', '');
  }
  refreshToken() {
    return this.httpClient.get<Boolean>(this.url + 'refresh-token');
  }
  handleTokenExpired(error: any): Boolean {
    console.log('checking if access token is expired');
    var res = false;
    return res;
  }
  getInitialFixedAssetEndingBalances(): any {
    return this.httpClient.get<any>(this.url2 + 'getInitialFixedAssetEndingBalances');
  }
  updateFixedAssetBalance(type: string, add_sub: string, amount: number) {
    var out = {
      type: type,
      add_subtract: add_sub,
      amount: amount
    }
    return this.httpClient.post<Boolean>(this.url2 + 'updateFixedAssetBalance', out);
  }
}
