import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/models/prodotto';
import { ProdottiService } from 'src/app/services/prodotti.service'

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./lista-prodotti.component.scss']
})
export class ListaProdottiComponent implements OnInit {

  prodottiGenerati: Prodotto[] = []


  constructor(private prodottiService: ProdottiService) { }

  ngOnInit(): void {
    this.prodottiService.prendiArticolo().subscribe((prodottiArray)=>{
      this.prodottiGenerati = prodottiArray;
    })
  }


}
