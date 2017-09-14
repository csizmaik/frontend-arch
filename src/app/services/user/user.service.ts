import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import {Store} from '@ngrx/store';
import {AdminState} from '../../store/admin.state';
import {User} from './User';
import {CancelEditUserAction, EditUserAction, LoadUserAction} from '../../store/user/user.actions';
import {
    selectEditedUserId,
    selectLoadError,
    selectLoadInProgress,
    selectUserList
} from '../../store/user/user.selectors';

@Injectable()
export class UserService {

    constructor(private store: Store<AdminState>) {
    }

    listUsersAction(): void {
        this.store.dispatch(new LoadUserAction());
    }

    selectUserList(): Observable<User[]> {
        return this.store.select(selectUserList);
    }

    selectLoadError(): Observable<boolean> {
        return this.store.select(selectLoadError);
    }

    selectLoadInProgress(): Observable<boolean> {
        return this.store.select(selectLoadInProgress);
    }

    selectEditedUser(): Observable<User> {
        const users$: Observable<User[]> = this.selectUserList();
        const editedUserId$: Observable<number> = this.store.select(selectEditedUserId);
        return Observable.combineLatest(users$, editedUserId$, (users, editedUserId) => {
            return users.find(user => user.id === editedUserId);
        });
    }

    editUser(id: number): void {
        this.store.dispatch(new EditUserAction(id));
    }

    cancelUserEditing(): void {
        this.store.dispatch(new CancelEditUserAction());
    }
}
