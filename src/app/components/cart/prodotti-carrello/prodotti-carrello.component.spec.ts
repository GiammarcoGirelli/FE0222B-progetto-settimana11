import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottiCarrelloComponent } from './prodotti-carrello.component';

describe('ProdottiCarrelloComponent', () => {
  let component: ProdottiCarrelloComponent;
  let fixture: ComponentFixture<ProdottiCarrelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdottiCarrelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdottiCarrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
