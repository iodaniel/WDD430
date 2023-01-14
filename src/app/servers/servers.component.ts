import { Component } from '@angular/core';


@Component({
  // selector: '[app-servers]',
  //selector: '.app-servers', 
  //another ways to add the selector 
  selector:'app-servers',

  // template: `
  //     <app-server></app-server>
  //     <app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer= false;
  serverCreationStatus = "No server was created!";
  serverName = 'Testserver';
  username= "";
  serverCreated=false;
  servers =['TestServer', 'Testserver 2'];

  constructor(){
    setTimeout(() =>
    { this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "server was created! name is " + this.serverName;

  }

  onUpdateServerName(event : Event){
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
