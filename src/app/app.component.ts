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
  public meal: Dish[] = [];
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      dietEntryName: [
        '', Validators.compose([
          Validators.min(0),
          Validators.required,
        ]),
      ],
      dietEntryCarboQuantity: [
        0, Validators.compose([
          Validators.minLength(0),
          Validators.required
        ])
      ],
      dietEntryProtQuantity: [
        0, Validators.compose([
          Validators.min(0),
          Validators.required
        ])
      ],
      dietEntryFatQuantity: [
        0, Validators.compose([
          Validators.min(0),
          Validators.required
        ])
      ]
    });


    this.meal.push(new Dish(1, 1, 'Teste1', 10, 10, 10, 120));
    this.meal.push(new Dish(1, 1, 'Teste2', 10, 10, 10, 120));
  }
}



