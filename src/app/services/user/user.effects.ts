import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import {LOAD_USERS, LoadUserAction, LoadUserFailedAction, LoadUserSuccessAction} from '../../store/user/user.actions';
import {Http} from '@angular/http';
import {of} from 'rxjs/observable/of';


@Injectable()
export class UserEffects {
    @Effect() userList$: Observable<Action> = this.actions$.ofType<LoadUserAction>(LOAD_USERS)
        .delay(2000)
        .mergeMap(action =>
            this.http.get('http://127.0.0.1:8000/users')
                .map(response => {
                    const jsonObject = response.json();
                    const userList = Object.keys(jsonObject).map(k => jsonObject[k]);
                    return new LoadUserSuccessAction(userList);
                })
                .catch(() => of(new LoadUserFailedAction()))
        );

    constructor(private http: Http,
                private actions$: Actions) {
    }
}
