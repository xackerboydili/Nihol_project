import { notification } from "antd"


const notFound = {
    message: "Something is wrong"
}

const detectError = ({errStatus}) =>{
    switch(errStatus){
        case 409:
            return notification.error({...notFound})
        default:
            return;
    }
}




export {detectError}