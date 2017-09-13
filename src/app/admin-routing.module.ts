import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const adminRouting: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'user', loadChildren: 'app/components/user/user.module#UserModule'},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(adminRouting)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
