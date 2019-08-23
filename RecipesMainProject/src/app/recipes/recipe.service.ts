import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test',
    'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('A second test recipe', 'My second recipe',
    'https://upload.wikimedia.org/wikipedia/commons/2/29/Aunt_Edith%27s_Banana_Bread_Recipe.jpg')
  ];

  constructor() { }

  getRecipes() {
    // Renvoie une copie du tableau de données!
    return this.recipes.slice();
  }
}
