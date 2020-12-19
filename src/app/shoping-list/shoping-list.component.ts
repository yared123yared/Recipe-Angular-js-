import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShopingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private slcService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slcService.getIngredients();
  }

  onIngredientAdded(ingredient: Ingredient) {
    console.log(ingredient);
    // this.ingredients.push(ingredient);
  }

}
