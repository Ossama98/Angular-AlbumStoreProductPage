import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Album } from './album';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _albumUrl: string = "../assets/album.json";

  constructor(private _http: HttpClient) { }

  getAlbum(id: number): Observable<Album>{
    return this._http.get(this._albumUrl).map(response => <Album>response.json())
  }
}
