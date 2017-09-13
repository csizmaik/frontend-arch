import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {AdminState} from '../../store/admin.state';
import {User} from './User';
import {LoadUserAction} from '../../store/user/user.actions';
import {selectUserList} from '../../store/user/user.selectors';

@Injectable()
export class UserService {

    constructor(private store: Store<AdminState>) {
    }

    listUsersAction() {
        this.store.dispatch(new LoadUserAction());
    }

    selectUserList(): Observable<User[]> {
        return this.store.select(selectUserList);
    }
}
