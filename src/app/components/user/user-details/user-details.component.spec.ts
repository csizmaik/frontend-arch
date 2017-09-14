import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserDetailsComponent} from './user-details.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserService} from '../../../services/user/user.service';
import {HttpModule} from '@angular/http';
import {StoreModule} from '@ngrx/store';
import {adminReducer} from '../../../store/admin.reducer';

describe('UserDetailsComponent', () => {
    let component: UserDetailsComponent;
    let fixture: ComponentFixture<UserDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                HttpModule,
                StoreModule.forRoot(adminReducer),
            ],
            providers: [
                UserService
            ],
            declarations: [UserDetailsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
