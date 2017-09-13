import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {DashboardModule} from './components/dashboard/dashboard.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      RouterModule,
      DashboardModule,
      AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
