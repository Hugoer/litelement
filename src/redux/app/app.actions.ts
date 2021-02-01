import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../store';

export const OPEN_PANEL_LEFT = 'OPEN_PANEL_LEFT';
export const CLOSE_PANEL_LEFT = 'CLOSE_PANEL_LEFT';

export interface AppActionOpenLeftPanel extends Action<'OPEN_PANEL_LEFT'> { }
export interface AppActionCloseLeftPanel extends Action<'CLOSE_PANEL_LEFT'> { }

export type AppAction =
  AppActionOpenLeftPanel |
  AppActionCloseLeftPanel;

type ThunkResult = ThunkAction<void, RootState, undefined, AppAction>;

const openLeftPanel: ActionCreator<ThunkResult> = () => (dispatch) => {
  dispatch({
    type: OPEN_PANEL_LEFT
  });
};

const closeLeftPanel: ActionCreator<ThunkResult> = () => (dispatch) => {
  dispatch({
    type: OPEN_PANEL_LEFT
  });
};

export const toggleLeftPanel: ActionCreator<ThunkResult> = (opened: boolean) => (dispatch, getState) => {
  if (opened !== getState().app!.panelLeftIsOpened) {
    dispatch(closeLeftPanel());
  } else {
    dispatch(openLeftPanel());
  }
};
