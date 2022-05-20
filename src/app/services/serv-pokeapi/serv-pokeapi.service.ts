import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServPokeapiService {
  constructor(private http: HttpClient) {}

  public getData(endpoint: string, callback: (res: any) => any) {
    this.http.get(endpoint).subscribe(callback);
  }
}
