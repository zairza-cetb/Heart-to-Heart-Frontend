import Baseurl from "../Baseurl";

export const postChallenge = async (email) => {
    return new Promise(async (resolve,reject)=>{
        try{
        
            const response = await fetch(`${Baseurl}profile/challenge`,{
                method:'POST',
                body:JSON.stringify({
                    email:email
                }),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const result = await response.json();

            if(result.success)
            {
                return resolve(result.response)
            }
            else
            {
                return reject(result.error)
            }
    
    
        }
        catch(err){
            return reject(err.message)
        }
    })
}