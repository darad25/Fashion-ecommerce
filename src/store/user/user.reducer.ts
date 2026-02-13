import { AnyAction } from 'redux';

import { USER_ACTION_TYPES } from "./user.types";

import {
  signInFailed, signUpFailed, signOutFailed, signOutSuccess, signInSuccess,
  googleSignInStart, emailSignInStart, signUpStart, clearUserError
} from './user.action';

import { UserData } from '../../utils/firebase/firebase.utils';

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction): UserState => {

  if (
    signInSuccess.match(action)
  ) {
    return { ...state, currentUser: action.payload, isLoading: false, error: null };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null, isLoading: false, error: null };
  }

  if (
    signInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return { ...state, error: action.payload, isLoading: false };
  }

  if (
    googleSignInStart.match(action) ||
    emailSignInStart.match(action) ||
    signUpStart.match(action)
  ) {
    return { ...state, isLoading: true, error: null };
  }

  if (clearUserError.match(action)) {
    return { ...state, error: null };
  }

  return state;
};