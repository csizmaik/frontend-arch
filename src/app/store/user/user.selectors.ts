import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UserState} from './user.state';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUserList = createSelector(selectUserState, (state: UserState) => state.userList);
export const selectLoadError = createSelector(selectUserState, (state: UserState) => state.loadError);
export const selectLoadInProgress = createSelector(selectUserState, (state: UserState) => state.loadInProgress);