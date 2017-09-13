import * as fromUserState from './user.state';
import * as fromUserActions from './user.actions';

export function reducer(state: fromUserState.UserState = fromUserState.initialUserState, action: fromUserActions.All) {
    switch (action.type) {
        case fromUserActions.LOAD_USERS: {
            return {
                ...state,
                loadInProgress: true,
            };
        }
        case fromUserActions.LOAD_USERS_SUCCESS: {
            return {
                ...state,
                loadInProgress: false,
                userList: action.userList
            };
        }
        case fromUserActions.LOAD_USERS_FAILED: {
            return {
                ...state,
                loadInProgress: false,
                loadError: true
            };
        }
        default:
            return state;
    }
}
