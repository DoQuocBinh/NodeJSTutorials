import { getToken, sendGetRequest } from "./auth0/auth0.service"
import { AuthToken } from "./auth0/token.interface"

const endPoint = 'http://localhost:3000/api/menu/items/2'

const getItems = async (endPoint:string)=>{
    const objectValue: AuthToken = await getToken()
    const data: any = await 
        sendGetRequest(endPoint,objectValue.token_type,objectValue.access_token)
    //console.log(objectValue.access_token)
    console.log(data)
    return data
}
getItems(endPoint)


