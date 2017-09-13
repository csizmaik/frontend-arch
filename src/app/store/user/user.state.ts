import {User} from '../../services/user/User';

export interface UserState {
    userList: User[];
}

export const initialUserState: UserState = {
    userList: [
        {
            id: 1,
            forename: 'John',
            surname: 'Dow',
            email: 'john.dow@mail.com'
        },
        {
            id: 2,
            forename: 'Jane',
            surname: 'Dow',
            email: 'jane.dow@mail.com'
        }
    ]
};
