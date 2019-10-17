import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipes.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put<Recipe[]>(
      'https://angularudemyrbemainbackend.firebaseio.com/recipes.json'
      , recipes
    ).subscribe(response => {
      console.log(response);
    });
  }

  fetchRecipes() {
    return this.authService.userSubject.pipe(take(1), exhaustMap(user => {
      return this.http.get<Recipe[]>('https://angularudemyrbemainbackend.firebaseio.com/recipes.json',
      { params: new HttpParams().set('auth', user.token)});
    }),
    map(recipes => {
      return recipes.map(recipe => {
        // Initialise les ingéredients à un tableau vide pour les recettes récupérées n'en ayant pas.
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
      });
    }),
    tap(recipes => {
      this.recipeService.setRecipes(recipes as Recipe[]);
    }));
  }
}
