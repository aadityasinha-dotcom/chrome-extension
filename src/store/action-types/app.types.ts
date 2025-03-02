export enum AppActionType {
  LOGIN = '[App] Login',
  LOGIN_SUCCESS = '[App] Login Success',
  LOGIN_FAILURE = '[App] Login Failure',
}

export interface ILogin {
  type: AppActionType.LOGIN;
  payload: any;
}

export interface ILoginSuccess {
  type: AppActionType.LOGIN_SUCCESS;
  payload: any;
}

export interface ILoginFailure {
  type: AppActionType.LOGIN_FAILURE;
  payload: any;
}

export type AppAction =
  | ILogin
  | ILoginSuccess
  | ILoginFailure;

