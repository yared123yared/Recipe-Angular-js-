import { Recipe } from "./recipe.model";
import { EventEmitter, Output } from "@angular/core";


export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', '"../../../assets/Images/photo-1482049016688-2d3e1b311543.jpg'),
        new Recipe('A Test Recipe', 'This is simply a test', '../../../assets/Images/photo-1555396273-367ea4eb4db5.jpg'),
        new Recipe('A Test Recipe', 'This is simply a test', '../../../assets/Images/photo-1414235077428-338989a2e8c0.jpg')

    ];

    getRecipes() {
        return this.recipes.slice();
    }


}