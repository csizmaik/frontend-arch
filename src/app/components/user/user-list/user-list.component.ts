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
    public loadError: Observable<boolean>;
    public loadInProgress: Observable<boolean>;

    constructor(private userService: UserService) {
        this.userList = this.userService.selectUserList();
        this.loadError = this.userService.selectLoadError();
        this.loadInProgress = this.userService.selectLoadInProgress();
    }

    ngOnInit() {
        this.userService.listUsersAction();
    }

    editUser(id: number) {
        this.userService.editUser(id);
    }
}
