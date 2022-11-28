import { Component } from '@angular/core';

@Component({
  selector: 'app-output-an-array',
  templateUrl: './output-an-array.component.html',
  styleUrls: ['./output-an-array.component.scss']
})
export class OutputAnArrayComponent {
  arrayOfMen = [
    {
      id: 1,
      name: 'Ваня',
      age: 20
    },
    {
      id: 2,
      name: 'Петя',
      age: 12
    },
    {
      id: 3,
      name: 'Миша',
      age: 17
    },
    {
      id: 4,
      name: 'Леша',
      age: 40
    }
  ]
}
