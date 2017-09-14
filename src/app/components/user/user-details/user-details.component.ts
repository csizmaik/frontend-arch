import {Component, OnInit} from '@angular/core';
import {User} from '../../../services/user/User';
import {UserService} from '../../../services/user/user.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {isNullOrUndefined} from 'util';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
    public user: Observable<User>;
    public userForm: FormGroup;

    constructor(private userService: UserService,
                private fb: FormBuilder) {
        this.user = this.userService.selectEditedUser();
    }

    ngOnInit() {
        this.createForm();
        this.user
            .filter(user => !isNullOrUndefined(user))
            .subscribe((user) => {
                this.userForm.patchValue({
                    email: user.email
                });
            });
    }

    cancelUserEditing() {
        this.userService.cancelUserEditing();
    }

    createForm() {
        this.userForm = this.fb.group({
            email: ['', Validators.required]
        });
    }
}
