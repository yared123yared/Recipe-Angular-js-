import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model'
@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tommatow', 6)
  ]

  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ingredient: Ingredient) {
    console.log(ingredient);
    this.ingredients.push(ingredient);
  }

}
