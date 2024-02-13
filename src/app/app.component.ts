import { Component } from '@angular/core';
import { Dish } from '../models/dish.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Dietable';
  public meals: { [key: string]: Dish[] } = { };
  public dish: Dish[] = [];
  public form: FormGroup;

  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      dietMealId: [
        0, Validators.compose([
          Validators.required,
          Validators.min(1)
        ])
      ],
      dietEntryName: [
        '', Validators.compose([
          Validators.required,
          Validators.maxLength(40)
        ])
      ],
      dietEntryCarbQuantity: [
        0, Validators.compose([
          Validators.required,
          Validators.min(1)
        ])
      ],
      dietEntryProtQuantity: [
        0, Validators.compose([
          Validators.required,
          Validators.min(1)
        ])
      ],
      dietEntryFatQuantity: [
        0, Validators.compose([
          Validators.required,
          Validators.min(1)
        ])
      ]
    });
  }

  add() {
    const mealId = this.form.controls['dietMealId'].value;
    const food = this.form.controls['dietEntryName'].value;
    const carb = this.form.controls['dietEntryCarbQuantity'].value;
    const prot = this.form.controls['dietEntryProtQuantity'].value;
    const fat = this.form.controls['dietEntryFatQuantity'].value;  //
  
    const id = this.dish.length + 1;
  

    if (!this.meals[mealId]) {
      this.meals[mealId] = [];
    }

    const newDish: Dish = new Dish(id, mealId, food, carb, prot, fat, this.getKcal(carb, prot, fat));
  
    this.meals[mealId].push(newDish);
    this.dish.push(newDish);
  
    this.clear();
  }

  getKcal(carb: number, prot: number, fat:number) {
    const kcal: number = (carb * 4) + (prot * 4) + (fat * 9)

    return kcal;
  }


  clearAll() {
    this.dish = []
    this.clear;
  }

  clear() {
    this.form.reset();
  }
}



