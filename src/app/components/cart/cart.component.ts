import { Component, Input, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/models/prodotto';
import { MessaggiService } from 'src/app/services/messaggi.service';
import { ProdottiCarrelloComponent } from './prodotti-carrello/prodotti-carrello.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  //cartItems  : Prodotto[] = new Prodotto[];

//  cartItems = [
//    {id: 500, titolo: 'Aggiungi Qualcosa al tuo carrello!', body: '', quantity: 0, price: 0},
//  ];

  totaleCarrello = 0

  constructor(private msg: MessaggiService) { }

  ngOnInit() {

      }


}
