import { Ingredient } from "../Shared/ingredient.model";

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tommatow', 6)
    ];

    getIngredients() {
        return this.ingredients;
    }
    addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

}