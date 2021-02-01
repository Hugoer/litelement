import { Reducer } from 'redux';
import { OPEN_PANEL_LEFT, CLOSE_PANEL_LEFT } from './app.actions';
import { RootAction } from '../../store';

export interface AppState {
  panelLeftIsOpened: boolean;
}

const INITIAL_STATE: AppState = {
  panelLeftIsOpened: true,
};

const app: Reducer<AppState, RootAction> = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case OPEN_PANEL_LEFT:
      return {
        ...state,
        panelLeftIsOpened: true,
      };
    case CLOSE_PANEL_LEFT:
      return {
        ...state,
        panelLeftIsOpened: false,
      };
    default:
      return {
        ...state,
      };
  }

};

export default app;
