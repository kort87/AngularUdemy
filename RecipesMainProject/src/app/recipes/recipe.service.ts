import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test',
    'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'
    , [
      new Ingredient('Meat', 2),
      new Ingredient('Butter', 1)
    ]),
    new Recipe('A second test recipe', 'My second recipe',
    'https://upload.wikimedia.org/wikipedia/commons/2/29/Aunt_Edith%27s_Banana_Bread_Recipe.jpg'
    , [
      new Ingredient('Milk', 2),
      new Ingredient('Rice', 1),
      new Ingredient('Apple', 5)
    ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    // Renvoie une copie du tableau de données!
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
