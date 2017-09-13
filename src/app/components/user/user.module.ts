import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserRoutingModule} from './user-routing.module';
import {UserService} from '../../services/user/user.service';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule
    ],
    providers: [
        UserService
    ],
    declarations: [
        UserComponent,
        UserListComponent
    ]
})
export class UserModule {
}
