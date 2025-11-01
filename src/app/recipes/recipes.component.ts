import { Component, OnInit } from "@angular/core";

import { RecipeService } from "./recipe.service";

@Component({
  selector: "app-recipes",
  standalone: false,
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
