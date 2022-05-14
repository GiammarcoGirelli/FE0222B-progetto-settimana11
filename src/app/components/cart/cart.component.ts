import { Component, Input, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/models/prodotto';
import { MessaggiService } from 'src/app/services/messaggi.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() prodottiCarrello: Prodotto[] = [];

  constructor(private msg: MessaggiService) { }

  ngOnInit(): void {
    this.msg.prendiMessaggio().subscribe((product) =>{
      console.log(product)
    })
  }

}
