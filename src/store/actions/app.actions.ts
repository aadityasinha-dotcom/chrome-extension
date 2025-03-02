import {
  loginApi,
} from 'core/api/app.api';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppAction, AppActionType } from '../action-types/app.types';

export const login: AppAction = {
  type: AppActionType.LOGIN,
  payload: undefined,
};

export const loginSuccess: AppAction = {
  type: AppActionType.LOGIN_SUCCESS,
  payload: undefined,
};

export const loginFailure: AppAction = {
  type: AppActionType.LOGIN_FAILURE,
  payload: undefined,
};


export const loginAction =
  (loginData: any): ThunkAction<Promise<void>, null, null, AppAction> =>
  async (dispatch: Dispatch<AppAction>): Promise<void> => {
    try {
      dispatch(login);
      const response: any = await loginApi(loginData);
      if (response.data.message === 'ERROR') {
        dispatch({
          type: AppActionType.LOGIN_FAILURE,
          payload: {
            error: response.data.description,
            showCaptcha: response.data.showCaptcha,
          },
        });
        throw new Error(response.data);
      } else {
        dispatch({
          type: AppActionType.LOGIN_SUCCESS,
          payload: response.data.jwt,
        });
      }
    } catch (error: any) {
      // console.log(error);
      // dispatch({
      //   type: AppActionType.LOGIN_FAILURE,
      //   payload: {
      //     error: error.message,
      //     captcha: error.captcha
      //   },
      // });
    }
  };


