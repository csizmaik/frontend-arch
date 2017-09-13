import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {UserListComponent} from './user-list/user-list.component';

const userRouting: Routes = [
    {
        path: '', component: UserComponent,
        children: [
            {path: '', component: UserListComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(userRouting)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
