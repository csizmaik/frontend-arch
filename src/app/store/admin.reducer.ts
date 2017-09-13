import {ActionReducerMap} from '@ngrx/store';
import * as fromUserReducer from './user/user.reducer';

export const adminReducer: ActionReducerMap<any> = {
    user: fromUserReducer.reducer
};
