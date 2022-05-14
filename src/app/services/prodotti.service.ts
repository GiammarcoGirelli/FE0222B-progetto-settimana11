import { Injectable } from '@angular/core';
import { Prodotto } from '../models/prodotto';
import {  HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

const apiUrl='http://localhost:4201/prodotti';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  prodotti: Prodotto[] = []


  constructor(public http: HttpClient) {

  }


  prendiArticolo(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(apiUrl)
  }
}
