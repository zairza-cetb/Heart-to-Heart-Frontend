import { toast } from "react-toastify"
import { getPatientDetails, googleAuthPatient, logoutPatient, registerPatient, signInPatient, signUpPatient } from "../../api/authentication"
import { ActionTypes } from "../actionTypes"


const userSignupSuccess = (payload) => ({
    type:ActionTypes.SIGNUP_USER_SUCCESS,
    payload:payload
}) 

const userSignupFailure = (error) => ({
    type:ActionTypes.SIGNUP_USER_FAILURE,
    payload:error
})

export const patientSignupAction = (data) => {
    return async (dispatch) => {
        signUpPatient(data)
        .then(async (user) => {
            dispatch({
                type:ActionTypes.SIGNUP_USER_START,
            });
            dispatch(userSignupSuccess(user));
            toast.success('Successfully Signed Up', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            //console.log(user)
        })
        .catch((err)=>{
            dispatch(userSignupFailure(err));
            toast.error(err, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
    }
}

export const patientLoginAction = (data) => {
    return async (dispatch) => {
        signInPatient(data)
        .then(async (user) => {
            dispatch({
                type:ActionTypes.LOGIN_USER_START
            });
            dispatch({
                type:ActionTypes.LOGIN_USER_SUCCESS,
                payload:user
            })
            toast.success('Successfully Logged In', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
        .catch((err)=>{
            dispatch({
                type:ActionTypes.LOGIN_USER_FAILURE,
                payload:err
            })
            toast.error(err, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        });
    }
}

export const cleanStateAction = () => {
    return async (dispatch) => {
        dispatch({
            type:ActionTypes.CLEAN_STATE
        })
    }
}

export const patientGoogleAuth = (data) => {
    //console.log(data)
    return async (dispatch) => {
        dispatch({
            type:ActionTypes.LOGIN_USER_START
        })
        googleAuthPatient(data)
        .then((user)=>{
            dispatch({
                type:ActionTypes.LOGIN_USER_SUCCESS,
                payload:user
            })
            toast.success('Successfully Logged In', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
        .catch((err)=>{
            dispatch({
                type:ActionTypes.LOGIN_USER_FAILURE,
                payload:err
            })
            toast.error(err, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
    }
}

export const patientRegisterAction = data => {
    return async (dispatch) => {
        dispatch({
            type:ActionTypes.REGISTER_PATIENT_START
        })
        registerPatient(data)
        .then(user => {
            dispatch({
                type:ActionTypes.REGISTER_PATIENT_SUCCESS,
                payload:user
            })
            toast.success('Successfully Registered', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
        .catch(err => {
            dispatch({
                type:ActionTypes.REGISTER_PATIENT_FAILURE,
                payload:err
            })
            toast.error(err, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
    }
}

export const getPatientDetailsAction = email => {
    return async dispatch => {
        dispatch({
            type:ActionTypes.GET_PATIENT_START
        });
        getPatientDetails(email)
        .then(user => 
            dispatch({
                type:ActionTypes.GET_PATIENT_SUCCESS,
                payload:user
            }))
        .catch((err)=>{
            dispatch({
                type:ActionTypes.GET_PATIENT_FAILURE,
                payload:err
            })
        })
    }
}

export const logoutPatientAction = email => {
    return async dispatch => {
        dispatch({
            type:ActionTypes.LOGOUT_START
        });
        logoutPatient(email)
        .then(response => {
            dispatch({
                type:ActionTypes.LOGOUT_SUCCESS,
                payload:response
            })
            // toast.success('Successfully Logged Out', {
            //     position: "top-right",
            //     autoClose: 2000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            // });
            })
        .catch(err => {
            dispatch({
                type:ActionTypes.LOGOUT_FAILURE,
                payload:err
            })
            toast.error(err, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
    }
}