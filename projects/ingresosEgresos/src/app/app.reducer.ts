import { ActionReducerMap } from '@ngrx/store';
import * as fromUI from './share/ui.reducer';
import * as fromAuth from './auth/auth.reducer';
import { AuthState } from './auth/auth.reducer';

export interface AppState {
  ui: fromUI.State;
  auth: fromAuth.AuthState;
}

export const AppReducer: ActionReducerMap<AppState> = {
  ui: fromUI.uiReducer,
  auth: fromAuth.authReducer
};
