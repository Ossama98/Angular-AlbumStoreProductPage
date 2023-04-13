import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import  { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _albumUrl = "../assets/album.json";

  constructor(private _http: Http) { }

  getAlbum(id: number){
    return this._http.get(this._albumUrl).map((response) => response.json())
    // .pipe(
    //   map( (response) => console.log(typeof response))
    // )
  }
}
