import { Injectable } from '@angular/core';
import { Prodotto } from '../models/prodotto';
import {  HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


const apiUrl='http://localhost:4201/prodotti';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  prodotti!: Prodotto[]

  cartItems: Subject<Prodotto[]> = new Subject<Prodotto[]>();

  constructor(public http: HttpClient) {

  }


  prendiArticolo(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(apiUrl)
  }

  aggiungiCarrello() : Observable<Prodotto[]> {
    return this.cartItems
  }

}
