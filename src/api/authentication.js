import Baseurl from "../Baseurl";

export const signInPatient=async ({email,password})=>{
    return new Promise(async (resolve,reject)=>{
        try{
            const response = await fetch(`${Baseurl}auth/patient/login`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    email:email,password:password
                })
            });
            const result = await response.json();
       
            if(result.success)
            return resolve(result.response);
            else
            reject(result.error)
        }
        catch(err){
            return reject(err)
        }
    })
}
export const signUpPatient=async ({email,password})=>{
    return new Promise(async (resolve,reject)=>{
        try{
            const response = await fetch(`${Baseurl}auth/patient/signup`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    email:email,password:password
                })
            });
            const result = await response.json();
            if(result.success)
            resolve(result.response);
            else
            reject(result.error)
        }
        catch(err) {
            reject(err.message)
        }
        
    })
}
export const googleAuthPatient=async (data)=>{
    return new Promise(async (resolve,reject) => {
        try{
            const response = await fetch(`${Baseurl}auth/patient/auth/google`,{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            });
            const result = await response.json();

            if(result.success)
            return resolve(result.response)
            else
            return reject(result.error)
        }
        catch(err){
            return reject(err.message)
        }
    })
}
export const registerPatient=async (data)=>{
    return new Promise(async (resolve,reject) => {
        try{
 
            const response = await fetch(`${Baseurl}auth/patient/register`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            });
            const result = await response.json();
    
            if(result.success)
                return resolve(result.response)
            else
                return reject(result.error)
        }
        catch(err){
            return reject(err.message)
        }
    })
    
}

export const getPatientDetails = async (email) => {
    return new Promise(async (resolve,reject) => {
        try{
            const response = await fetch(`${Baseurl}profile/patient?`+new URLSearchParams({
                email:email
            }),{
               method:'GET',
               headers:{
                   'Content-Type':'application/x-www-form-urlencoded'
               } 
            })

            const result = await response.json();

            if(result.success)
            return resolve(result.response);
            else
            return reject(result.error)
        }
        catch(err){
            return reject(err.message)
        }
    })
}

export const logoutPatient = async (email) => {
    return new Promise(async (resolve,reject) => {
        try {

            const response = await fetch(`${Baseurl}auth/patient/logout?`+new URLSearchParams({
                email:email
            }),{
                method:'GET',
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded"
                }
            })

            const result = await response.json();

            if(result.success)
            return resolve(result.response)
            else
            return reject(result.error)
        }
        catch(err) {
            return reject(err)
        }
        
    })
}