import { Recipe } from "./recipe.model";
import { EventEmitter, Output } from "@angular/core";
import { Ingredient } from "../Shared/ingredient.model";


export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Burger', 'This is Burger recipe', '"../../../assets/Images/photo-1482049016688-2d3e1b311543.jpg',
            [new Ingredient('Meat', 1), new Ingredient('French Fries', 3)]),
        new Recipe('Pizza', 'This is Pizza recipe', '../../../assets/Images/photo-1555396273-367ea4eb4db5.jpg',
            [new Ingredient('Bread', 1), new Ingredient('Sandwitch', 3)]),
        new Recipe('Salad', 'This is salad recipe', '../../../assets/Images/photo-1414235077428-338989a2e8c0.jpg',
            [new Ingredient('Zukuni', 1), new Ingredient('Green Paper', 3)])

    ];

    getRecipes() {
        return this.recipes;
    }


}