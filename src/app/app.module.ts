import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, 
    ServerComponent,// add components this module is 
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule ,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
//this decorator have 4 properties, declarations, imports, providers and bootstrap
//you need to add the server component to the declarations.
//when you add the ServerComponent to the declaration you need to import the server component import
//{ServerComponent } from .. 

export class AppModule { }
