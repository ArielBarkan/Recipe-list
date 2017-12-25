import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
    new Recipe("Schnitzel","A schnitzel is meat", "../assets/images/recipes/1.jpg"),
    new Recipe("Fried egg","A fried egg is a cooked dish", "../assets/images/recipes/2.jpg"),
    new Recipe("Mejadra ","Mejadra consists of cooked lentils together with groats", "../assets/images/recipes/3.jpg")
];
  constructor() { }

  ngOnInit() {
  }

}