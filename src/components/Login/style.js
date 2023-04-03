import  {Input}  from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
Wrapper.Container = styled.div`
width: 500px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
Wrapper.Title = styled.div`
margin-top: 20px;
font-size:  30px;
color: #000;
font-weight: 500;

`
Wrapper.Description = styled.div`
font-weight: 300;
font-size: 16px;
width: 70%;
text-align: center;
`
Wrapper.Input = styled(Input)`
display: flex;
-webkit-box-align: center;
align-items: center;
justify-content: center;
margin-top: 40px;
width: 50%;
height: 50px;
background: rgb(250, 251, 254);
outline: none;
border: 1px solid rgb(240, 238, 247);
border-radius: 12px;
padding-left: 15px;
color: rgb(89, 90, 98);
.ant-input-group-addon{
    border:none;
    background-color: transparent;
    
}
`;

Wrapper.PasswordInput = styled(Input.Password)`
display: flex;
-webkit-box-align: center;
align-items: center;
justify-content: center;
margin-top: 40px;
width: 50%;
height: 50px;
background: rgb(250, 251, 254);
outline: none;
border: 1px solid rgb(240, 238, 247);
border-radius: 12px;
padding-left: 15px;
color: rgb(89, 90, 98);
:hover{
    background-color: rgb(250, 251, 254);
    border: 1px solid rgb(240, 238, 247);

}
`;

Wrapper.Button = styled.div`
margin-top: 50px;
width: 50%;
height: 50px;
border: 1px solid rgb(240, 238, 247);
border-radius: 12px;
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
cursor: pointer;
font-size: 16px;
color: rgb(250, 250, 250);
padding: 0 15px;
background-color: rgb(48, 104, 204);
${({ warningAnimation }) =>
    warningAnimation &&
    `
    animation: rotate 0.7s ease-in-out both;
  @keyframes rotate {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
    25% {
      transform: rotate(3deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-3deg) translate3d(0, 0, 0);
    }
    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
  }
  `}
`;