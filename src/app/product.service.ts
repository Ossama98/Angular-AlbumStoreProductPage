import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _albumurl: string = "../assets/album.json";

  constructor(private _http: HttpClient) { }

  getAlbum(id: number){
    return this._http.get(this._albumurl).pipe(
      map( (response) => console.log(typeof response))
    )
  }
}
