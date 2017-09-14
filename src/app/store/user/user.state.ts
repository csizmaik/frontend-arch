import {User} from '../../services/user/User';

export interface UserState {
    userList: User[];
    loadInProgress: boolean;
    loadError: boolean;
    editedUserId: number;
}

export const initialUserState: UserState = {
    userList: [],
    loadInProgress: false,
    loadError: false,
    editedUserId: null
};
