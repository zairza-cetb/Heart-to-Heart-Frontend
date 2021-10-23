import { ActionTypes } from "../actionTypes";

const initialState = {
  email: "",
  createdAt: "",
  id: null,
  isLoginLoading: false,
  isLoginError: "",
  isSignupLoading: false,
  isSignupError: "",
  isRegistered: false,
  isLoggedIn: false,
  isLogoutErr: null,
  isLogout: false,
  isLogoutLoading:false,
  isGoogleSignIn:false,
  type: "",
  isSignedUp: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CLEAN_STATE: {
      return {
        ...initialState,
        isLoginError: "",
      };
    }
    case ActionTypes.LOGIN_USER_START:
      return {
        ...state,
        isLoginLoading: true,
        isLoginError: "",
      };

    case ActionTypes.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        isLoginLoading: false,
        email:action.payload.email || null,
        createdAt:action.payload.createdAt || null,
        id: action.payload._id || null,
        isRegistered: action.payload.isRegistered,
        isLoggedIn: action.payload.isLoggedIn,
        isSignedUp: true,
        type: action.payload.type,
        isGoogleSignIn:action.payload.isGoogleSignIn,
        isLoginError: "",
        isLogout: false,
      };
    }

    case ActionTypes.LOGIN_USER_FAILURE: {
      return {
        ...state,
        isLoginLoading: false,
        isLoginError: action.payload,
      };
    }

    case ActionTypes.SIGNUP_USER_START: {
      return {
        ...state,
        isSignupLoading: true,
        isSignupError: "",
      };
    }
    case ActionTypes.SIGNUP_USER_SUCCESS: {
      return {
        ...state,
        isLoginLoading: false,
        email: action.payload.email || "",
        id: action.payload._id || null,
        isRegistered: action.payload.isRegistered,
        isLoggedIn: action.payload.isLoggedIn,
        type: action.payload.type,
        isSignupLoading: false,
        createdAt: action.payload.createdAt,
        isGoogleSignIn:action.payload.isGoogleSignIn,
        isSignedUp: true,
        isSignupError: "",
      };
    }

    case ActionTypes.SIGNUP_USER_FAILURE: {
      return {
        ...state,
        isSignupLoading: false,
        isSignupError: action.payload,
      };
    }
    case ActionTypes.REGISTER_PATIENT_SUCCESS:{
      return {
        ...state,
        isRegistered:true
      }
    }
    case ActionTypes.LOGOUT_START:{
      return {
        ...state,
        isLogoutLoading:true,
        isLogoutErr:null
      }
    }
    case ActionTypes.LOGOUT_SUCCESS: {
      return {
        ...initialState,
        isLogout: true,
        isLogoutLoading:false
      };
    }
    case ActionTypes.LOGOUT_FAILURE: {
      return {
        ...state,
        isLogoutLoading:false,
        isLogoutErr: action.payload,
      };
    }
   
    default:
      return state;
  }
};

export default authReducer;
