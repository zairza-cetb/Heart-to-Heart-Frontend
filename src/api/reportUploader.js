import Baseurl from "../Baseurl";

export const reportUpload = async (data) => {

    return new Promise(async (resolve,reject) => {
        try{
            const response = await fetch(`${Baseurl}report/upload`,{
                method:'POST',
                body:data,
                
            })
            const result = await response.json();

            if(result.success)
            return resolve(result.response)
            else
            return reject(result.error)
        }
        catch(err) {
            return reject(err.message)
        }
    })
}