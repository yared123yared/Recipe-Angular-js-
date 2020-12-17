import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', '"../../../assets/Images/photo-1482049016688-2d3e1b311543.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', '../../../assets/Images/photo-1555396273-367ea4eb4db5.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', '../../../assets/Images/photo-1414235077428-338989a2e8c0.jpg')

  ];




  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
