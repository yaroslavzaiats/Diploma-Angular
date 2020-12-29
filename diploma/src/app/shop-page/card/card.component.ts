import { Component, Input, OnInit, OnDestroy} from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy{
  @Input() card;

  constructor(
    private cartService: CartService

  ){  }
  addToCart(card) {
    this.cartService.addToCart(card);
  }

  ngOnInit() {

  }

  ngOnDestroy(){

  }
  
  
}
