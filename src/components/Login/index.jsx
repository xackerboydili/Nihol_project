import { useState } from "react";
import { useRef } from "react";
import { Wrapper } from "./style";

import { LoadingOutlined } from "@ant-design/icons"
import { useAxios } from "../../hooks/useAxios";
import { detectError } from "../../generic/notification";
import { notification } from "antd";


const Login = () =>{
    const axios = useAxios()
    const [warningAnim, setWarningAnim] = useState(false)
    const numberRef = useRef()
    const passwordRef = useRef()
    const [loading, setLoading] = useState(false)
    
    const playAnim = () =>{
        setWarningAnim(true)
        setTimeout(() => {
            setWarningAnim(false)
        }, 1000);
    }
    

    const onAuth = async () =>{
        if(loading) return
        const password =  passwordRef.current.input.value
        const number =   numberRef.current.input.value
        if(!password || !number) {
            playAnim()
            notification.error({
                message: "Please fill all the gaps"
            })
        } 

        const res = await axios({
                url: `/user/sign-in`,
                method: "POST",
                body: {
                    password: password,
                    phoneNumber: `+998${number}`,
                },

            })
            
            setLoading(false)
            if(res?.response?.status >= 400)
            return detectError({errStatus: res?.response.status})
            
            const {token} = res.data.data

            localStorage.setItem("token", token)  
    }
    return (
    <Wrapper>
        <Wrapper.Container>
            <Wrapper.Title>Yana bir bor salom</Wrapper.Title>
            <Wrapper.Description>Biz xar kuni kechagidan yaxshiroq xizmat ko'rsatishga intilamiz</Wrapper.Description>
            <Wrapper.Input
            type="number"
            placeholder="77 777 77 77" 
            bordered={false} 
            addonBefore="+998"
            ref={numberRef}
            />
           
            <Wrapper.PasswordInput 
            placeholder="parolingizni kiriting" 
            bordered={false} 
            ref={passwordRef}  
                   
            />
            <Wrapper.Button warningAnim={warningAnim} onClick={onAuth}>
               {loading ? <LoadingOutlined/> : "Login"}
            </Wrapper.Button>
        </Wrapper.Container>
    </Wrapper>
    )
}

export default Login



 //