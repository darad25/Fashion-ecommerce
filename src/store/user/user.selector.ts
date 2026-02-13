import { createSelector } from "reselect";

import { RootState } from '../../store/store';

import { UserState } from "./user.reducer";

export const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
    selectUserReducer,
    (user) => user.currentUser
);

export const selectUserError = createSelector(
    selectUserReducer,
    (user) => user.error
);

export const selectIsLoading = createSelector(
    selectUserReducer,
    (user) => user.isLoading
);