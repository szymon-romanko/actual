import type * as constants from '../constants';

import type { ModalsActions, ModalsState } from './modals';
import type { NotificationsActions, NotificationsState } from './notifications';
import type { PrefsActions, PrefsState } from './prefs';
import type { UserActions, UserState } from './user';

export type CloseBudgetAction = {
  type: typeof constants.CLOSE_BUDGET;
};

export type Action =
  | ModalsActions
  | NotificationsActions
  | PrefsActions
  | UserActions
  | CloseBudgetAction;

export type State = {
  modals: ModalsState;
  notifications: NotificationsState;
  prefs: PrefsState;
  user: UserState;
};
