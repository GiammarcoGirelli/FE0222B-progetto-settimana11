import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Prodotto } from '../models/prodotto';

@Injectable({
  providedIn: 'root'
})
export class MessaggiService {

  subject = new Subject()

  constructor() { }

  inviaMessaggio(product: Prodotto){
    this.subject.next(product)
    console.log(product)
  }

  prendiMessaggio(){
    return this.subject.asObservable()
  }

}
