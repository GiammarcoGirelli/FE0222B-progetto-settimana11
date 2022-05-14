import { Component, OnInit, Input } from '@angular/core';
import { Prodotto } from 'src/app/models/prodotto';
import { MessaggiService } from 'src/app/services/messaggi.service';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.scss']
})


export class ProdottoComponent implements OnInit {

  @Input() product : Prodotto = new Prodotto();

  constructor(private msg: MessaggiService) { }

  ngOnInit(): void {

  }

  aggiungiCarrello(){
    this.msg.inviaMessaggio(this.product)
  }

}
