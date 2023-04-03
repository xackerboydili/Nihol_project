import axios from "axios";
// const {REACT_APP_MAIN_URL} = process.env

export const useAxios = () =>{
    return async ({url, method = "GET", body, headers}) =>{
        return await axios({
            url: `https://vizzano.mock.up.oishafabrics.uz/api${url}`,
            method,
            data: {
                ...body,
            },
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type" : "application/json",
                "Allow-Control-Origin" : true,
                ...headers
            }
        })
        .then((res) =>res)
        .catch((error) =>error)
    }
}

