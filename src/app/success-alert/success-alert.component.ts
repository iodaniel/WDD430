import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  // styleUrls: ['./success-alert.component.css']
  styles:[`
  p{ 
    background-color:palegreen;
    padding:20px;
    border: 1px solid green;

  }
`]
})
export class SuccessAlertComponent {

}
