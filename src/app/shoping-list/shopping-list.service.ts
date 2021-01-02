import { Ingredient } from "../Shared/ingredient.model";
import { Subject } from 'rxjs'

export class ShoppingListService {
    StartedEditing = new Subject<number>();
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tommatow', 6)
    ];

    getIngredients() {
        return this.ingredients;
    }
    getIngredient(index: number) {
        return this.ingredients[index]
    }
    addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    updateIngredients(index: number, newIngredient: Ingredient) {
        console.log("this is the update ingredients service running ")
        console.log('this is the updated ingredient', newIngredient);
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());

    }
    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }


}