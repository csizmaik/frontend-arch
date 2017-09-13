import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UserState} from './user.state';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUserList = createSelector(selectUserState, (state: UserState) => state.userList);
