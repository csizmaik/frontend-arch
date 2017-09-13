import {reducer} from './user.reducer';
import {LoadUserAction} from './user.actions';
import {initialUserState} from './user.state';

describe('user.reducer', () => {

    it('should return with the same state', () => {
        const initState = {userList: []};
        const result = reducer(initState, new LoadUserAction);
        expect(result === initState).toBe(true);
    });

    it('should return with the initial state', () => {
        const initState = initialUserState;
        const result = reducer(undefined, new LoadUserAction);
        expect(result === initState).toBe(true);
    });
});
