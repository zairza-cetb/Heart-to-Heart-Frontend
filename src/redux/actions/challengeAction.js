import { postChallenge } from "../../api/challenge-api"
import { ActionTypes } from "../actionTypes"

export const postChallengeAction = (email) => {
    return dispatch => {
        dispatch({
            type:ActionTypes.TODAY_CHALLENGE_COMPLETE_START,
        })
        postChallenge(email).then((response)=>{
            dispatch({
                type:ActionTypes.TODAY_CHALLENGE_COMPLETE_SUCCESS,
                payload:response
            })
        }).catch(err=>{
            dispatch({
                type:ActionTypes.TODAY_CHALLENGE_COMPLETE_FAILURE,
                payload:err
            })
        })
    }
}