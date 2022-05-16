import { Component, OnInit, Input } from '@angular/core';
import { Prodotto } from 'src/app/models/prodotto';
import { ProdottiService } from 'src/app/services/prodotti.service';
import { ListaProdottiComponent } from '../lista-prodotti.component';



@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.scss']
})


export class ProdottoComponent implements OnInit {

  @Input() product : Prodotto = new Prodotto();

  constructor(private Service : ProdottiService) { }

  ngOnInit(): void {


  }




}

