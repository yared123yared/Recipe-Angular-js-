import { Ingredient } from "../Shared/ingredient.model";

export class Recipe {
    public name: String;
    public description: String;
    public imagePath: String;
    public ingredients: Ingredient[];

    constructor(name: String, desc: String, imagePath: String, ingredient: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredient;
    }
}