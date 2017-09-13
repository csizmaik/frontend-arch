import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppComponent} from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {DashboardModule} from './components/dashboard/dashboard.module';
import {RouterModule} from '@angular/router';
import {adminReducer} from './store/admin.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      RouterModule,
      DashboardModule,
      AdminRoutingModule,
      StoreModule.forRoot(adminReducer),
      StoreDevtoolsModule.instrument({
          maxAge: 25
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
