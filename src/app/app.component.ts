import { Component } from '@angular/core';
import Links from '../files/links.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor() {
    console.log(Links);
  }
}
