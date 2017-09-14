import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserRoutingModule} from './user-routing.module';
import {UserService} from '../../services/user/user.service';
import {UserDetailsComponent} from './user-details/user-details.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        ReactiveFormsModule
    ],
    providers: [
        UserService
    ],
    declarations: [
        UserComponent,
        UserListComponent,
        UserDetailsComponent
    ]
})
export class UserModule {
}
