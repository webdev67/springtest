import { Action } from '@ngrx/store';
import { Actions } from '../actions/actions';

export class SideNav implements Action {
  readonly type = Actions.SIDE_NAV;
  constructor(public payload: any) {}
}

export type AllActions = SideNav;
