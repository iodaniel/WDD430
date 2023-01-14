import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  //you can add directly the style here in the app.component.ts and need to be an array templates and styles
  styles:[`
  h3 {
    color:dodgerblue;
  }
  `]
})
export class AppComponent {

}
