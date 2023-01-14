import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    // styleUrls: ['./app/component.css'],
    styles: [`
        .online{
          color:white;
        }
    `]
})
export class ServerComponent{ 
  serverID: number = 10;
  serverStatus: string= 'online';
  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';


  }

  getServerStatus(){
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus ==='online' ? 'green':'red';
  }
}//for comvention you need to add the word component in this.
//import decorator 
//decorators =>@components
//