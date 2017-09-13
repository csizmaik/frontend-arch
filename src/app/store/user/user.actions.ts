import {Action} from '@ngrx/store';
import {User} from '../../services/user/User';

export const LOAD_USERS = '[User] Load users';
export const LOAD_USERS_SUCCESS = '[User] Load users success';
export const LOAD_USERS_FAILED = '[User] Load users failed';

export class LoadUserAction implements Action {
    readonly type = LOAD_USERS;
}

export class LoadUserSuccessAction implements Action {
    readonly type = LOAD_USERS_SUCCESS;

    constructor(public userList: User[]) {
    }
}

export class LoadUserFailedAction implements Action {
    readonly type = LOAD_USERS_FAILED;

    constructor() {
    }
}

export type All =
    LoadUserAction |
    LoadUserSuccessAction |
    LoadUserFailedAction;
