import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServPokeapiService {
  readonly API_URL: string = environment.pokeApi;

  constructor(private http: HttpClient) {}

  public getData(value: string, callback: (res: any) => any) {
    this.http.get(this.API_URL + value).subscribe(callback);
  }
}
