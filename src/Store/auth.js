import axios from 'axios';
import * as actionTypes from './actions'; 
export const authStart=()=>{
    return{
        type:actionTypes.AUTH_START
    }
}

export const authSucces=(authdata)=>{
    return{
        type:actionTypes.AUTH_SUCCES,
        authData:authdata
    }
}
export const authFail=(error)=>{
    return{
        type:actionTypes.AUTH_FAIL,
        error:error
    }
}
export const auth=(email,password)=> {
    return dispatch=>{
       // dispatch(authStart());
        const authData={
            myemail:email,
            mypassword:password,
            returnSecureToken:true
        }; 
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAjMJnCYLmlMiAOac1c-h6ghICVdxJIvHg',authData)
        .then((res)=>{
            console.log(res);
            dispatch(authSucces(res.data));
        })
        .catch(err=>{
            dispatch(authFail(err));
            console.log(err);
        });
    }
} 
