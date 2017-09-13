import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../../../services/user/User';
import {UserService} from '../../../services/user/user.service';


@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    public userList: Observable<User[]>;

    constructor(private userService: UserService) {
        this.userList = this.userService.selectUserList();
    }

    ngOnInit() {
        this.userService.listUsersAction();
    }
}
