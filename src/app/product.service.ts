import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import  { Http } from '@angular/http'
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _albumUrl = "../assets/album.json";

  constructor(private _http: HttpClient) { }

  getAlbum(id: number){
    return this._http.get(this._albumUrl)
    // .pipe(
    //   map( (response) => console.log(typeof response))
    // )
  }
}
