import { Component, OnInit, Input } from '@angular/core';
import { Prodotto } from 'src/app/models/prodotto';
import { CartComponent } from '../cart.component';

@Component({
  selector: 'app-prodotti-carrello',
  templateUrl: './prodotti-carrello.component.html',
  styleUrls: ['./prodotti-carrello.component.scss']
})
export class ProdottiCarrelloComponent implements OnInit {

  @Input() carrello : Prodotto = new Prodotto()

  constructor() { }

  ngOnInit(): void {
  }

}
