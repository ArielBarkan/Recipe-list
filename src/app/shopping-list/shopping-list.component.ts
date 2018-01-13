import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/models/ingredients.model';
import {ShoppingListService} from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredients[];

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getShoppingList()
  }


  onEmittNewIngredient(event: Ingredients){
    this.ingredients.push(event);
  }
}
