import {reducer} from './user.reducer';
import {LoadUserAction, LoadUserFailedAction, LoadUserSuccessAction} from './user.actions';
import {initialUserState, UserState} from './user.state';

describe('user.reducer', () => {

    it('should return with load in progress state', () => {
        const result = reducer(initialUserState, new LoadUserAction);
        expect(result.loadInProgress).toBe(true);
    });

    it('should return with load error state', () => {
        const initState: UserState = {
            ...initialUserState,
            loadInProgress: true
        };
        const result = reducer(initState, new LoadUserFailedAction());
        expect(result.loadError).toBe(true);
        expect(result.loadInProgress).toBe(false);
    });

    it('should return with user list', () => {
        const initState: UserState = {
            ...initialUserState,
            loadInProgress: true
        };
        const result = reducer(
            initState,
            new LoadUserSuccessAction(
                [
                    {id: 1, forename: 'John', surname: 'Dow', email: 'john@mail.com'}
                ])
        );
        expect(result.loadError).toBe(false);
        expect(result.loadInProgress).toBe(false);
        expect(result.userList.length).toBeGreaterThan(0);
    });
});
