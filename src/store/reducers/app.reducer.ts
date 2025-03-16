import { AppAction, AppActionType } from '../action-types/app.types';
import moment from 'moment';

interface IIPConfig {
  isoCode: string;
  dialCode: string;
}

export interface IAppInitialState {
  isPageLoading: boolean;
  isVerifyLoading: boolean;
  ipConfig: IIPConfig;
  isRegister: boolean;
  resetPassword: boolean;
  verifyAccount: boolean;
  authToken: string | undefined;
  authLoginFailed: boolean;
  error: string | undefined;
  featuredJobs: Array<any>;
  sessionExpired: boolean | undefined;
  t: string | undefined;
  openSignInModal: boolean;
  isCaptchaLoading: boolean;
  captcha: string | undefined;
  showCaptcha: boolean;
  // resumeData: any;
}

const isBrowser = typeof window !== 'undefined';
let authToken = isBrowser && localStorage.getItem('TALENTEZZY_AUTH_TOKEN');
let loginTime = isBrowser && localStorage.getItem('t');

const initialState: IAppInitialState = {
  isPageLoading: false,
  isVerifyLoading: false,
  ipConfig: { isoCode: '', dialCode: '' },
  isRegister: false,
  resetPassword: false,
  verifyAccount: false,
  authToken: authToken || undefined,
  authLoginFailed: false,
  error: undefined,
  featuredJobs: [],
  sessionExpired: undefined,
  t: loginTime || undefined,
  openSignInModal: false,
  isCaptchaLoading: false,
  captcha: undefined,
  showCaptcha: false,
  // resumeData: undefined,
};

export default function appReducers(
  state: IAppInitialState = initialState,
  action: AppAction
) {
  switch (action.type) {
    case AppActionType.LOGIN:
    case AppActionType.LOGIN_SUCCESS: {
      const loginTime = String(moment().unix());
      isBrowser && localStorage.setItem('t', loginTime);
      return {
        ...state,
        isRegister: false,
        authToken: action.payload,
        sessionExpired: action.payload ? false : true,
        isPageLoading: false,
        t: loginTime,
        showCaptcha: false,
        captcha: undefined,
        openSignInModal: false,
      };
    }
    case AppActionType.LOGIN_FAILURE: {
      return {
        ...state,
        isPageLoading: false,
        isVerifyLoading: false,
        error: action.payload.error,
        showCaptcha: action.payload.showCaptcha,
      };
    }
    default:
      return state;
  }
}

