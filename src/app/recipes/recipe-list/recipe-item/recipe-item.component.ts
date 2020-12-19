import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Recipe } from '../../recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelcted = new EventEmitter<void>();

  constructor() { }


  ngOnInit(): void {
    // console.log("this is the recipr init method")
  }

  onSelected() {
    // console.log("this is hte onSelected method")
    this.recipeSelcted.emit();
  }

}
