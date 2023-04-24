import axios from "axios";
import { AuthToken } from "./token.interface";

const url : string  = 'https://dev-e42be0kavg8dfspb.us.auth0.com/oauth/token'
const body : string = '{"client_id":"MmKedNya8sDIPFdneg3IcD9u3Zu0u5oq","client_secret":"dLH2tcfYkaXx9KCmjiZ9sDsXcv86cSXlzRiijxTNR9FKPjAFN-mqK6fLfKXXWtKh","audience":"https://gwstudent-endpoint","grant_type":"client_credentials"}'

export const getToken = async():Promise<AuthToken> =>{
    try {
        const resp = await axios.post(url, body, {
            headers: {
                'content-type': 'application/json'
            }
        });
        return resp.data;
    } catch (err:any) {      
        throw new Error(err)
    }   
}

export const sendGetRequest =
     async (url:string,token_type:string,access_token:string): Promise<any> => {
    try {
        const resp = await axios.get(url, {
            headers: {
                'authorization': `${token_type} ${access_token}`
            }
        });
        return resp.data
    } catch (err:any) {
        throw new Error(err)
    }
};