import { ActionTypes } from "../actionTypes";

const initialState = {
  phoneno: null,
  age: null,
  city: null,
  dob: null,
  email: null,
  id: null,
  name: null,
  pincode: null,
  isLoading: false,
  registered: false,
  errorMessage: null,
  type: null,
  updateSuccess: false,
  daysCompleted:0,
  startDate:""
};

const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CLEAN_STATE: {
      return {
        ...initialState,
        errorMessage:null,
      };
    }
    case ActionTypes.REGISTER_PATIENT_START : {
      return {
        ...state,
        isLoading:true,
        errorMessage:null,
        type:'patient',
        updateSuccess:false,
      }
    }
    case ActionTypes.REGISTER_PATIENT_SUCCESS: {
      return {
        ...state,
        isLoading:false,
        errorMessage:null,
        phoneno: action.payload.phoneno || null,
        age: action.payload.age || null,
        city: action.payload.city || null,
        dob: action.payload.dob || null,
        email: action.payload.email || null,
        id: action.payload._id ,
        name: action.payload.name || null,
        pincode: action.payload.pincode || null,
        startDate : action.payload.startDate || null,
        daysCompleted : action.payload.daysCompleted,
        type:action.payload.type,
        updateSuccess:true,
        registered:true
      }
    }
    case ActionTypes.REGISTER_PATIENT_FAILURE: {
      return {
        ...state,
        isLoading:false,
        errorMessage:action.payload.error,
        updateSuccess:false,
      }
    }
    case ActionTypes.GET_PATIENT_START: {
      return {
        ...state,
        errorMessage:null,
        isLoading:true,
      }
    }
    case ActionTypes.GET_PATIENT_SUCCESS: {
      return {
        ...state,
        phoneno: action.payload.phoneno || null,
        age: action.payload.age ||  null,
        city: action.payload.city ||  null,
        dob:action.payload.dob ||  null,
        email: action.payload.email || null,
        id: action.payload._id || null,
        name: action.payload.name || null,
        pincode: action.payload.pincode || null,
        startDate : action.payload.startDate || null,
        daysCompleted : action.payload.daysCompleted,
        isLoading: false,
        registered: action.payload.isRegistered,
        errorMessage: null,
        type: action.payload.type,
      }
    }
    case ActionTypes.GET_PATIENT_FAILURE: {
      return {
        ...state,
        errorMessage:action.payload,
        isLoading:false
      }
    }
    case ActionTypes.TODAY_CHALLENGE_COMPLETE_START:{
      return {
        ...state,
        isLoading:true,
        errorMessage:null,
      }
    }
    case ActionTypes.TODAY_CHALLENGE_COMPLETE_SUCCESS: {
      return {
        ...state,
        isLoading:false,
        startDate:state.daysCompleted===0?action.payload.startDate:state.startDate,
        daysCompleted:action.payload.daysCompleted,
        errorMessage:null
      }
    }
    case ActionTypes.TODAY_CHALLENGE_COMPLETE_FAILURE:{
      return {
        ...state,
        isLoading:false,
        errorMessage:action.payload
      }
    }
    default:
      return state;
  }
};

export default patientReducer;
