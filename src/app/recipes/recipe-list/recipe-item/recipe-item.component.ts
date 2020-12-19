import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Recipe } from '../../recipe.model'
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;


  constructor(private recipeService: RecipeService) { }


  ngOnInit(): void {
    console.log("Init method is running!");
  }

  onSelected() {

    // console.log("this is hte onSelected method")
    // console.log("This is the selected recipe", this.recipe);
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
