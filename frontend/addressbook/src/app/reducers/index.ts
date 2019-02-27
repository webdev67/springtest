import * as actions from '../store/reducer';
import { Actions } from '../actions/actions';

export interface State {
  showSideNav: boolean;
}

export const initialState: State = {
  showSideNav: false
};

export function reducer(state = initialState, action: actions.AllActions): State {
  switch (action.type) {
    case Actions.SIDE_NAV:
      return {
        ...state,
        showSideNav: !state.showSideNav
      };
    default:
      return state;
  }
}
