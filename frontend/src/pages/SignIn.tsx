import { FireTwoTone } from "@ant-design/icons";
import { GoogleLogin } from "@react-oauth/google";
import { Layout, Typography } from "antd";
import { useState } from "react";
import { globalContext } from "../context/globalContext";

export default function SignIn() {
  const { saveUserInfo } = globalContext();

  const { Title } = Typography;

  const handleGoogleLogin = (response: any) => {
    console.log(response);
    saveUserInfo(response.credential);
    // window.location.pathname = "/";
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#001529', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <FireTwoTone twoToneColor={"#06A77D"} style={{fontSize: 48}} />
      <Title level={3} style={{color: '#F5F5F5', margin: 24}}>Faça login para continuar</Title>
      <GoogleLogin
        
        onSuccess={credentialResponse => {
          handleGoogleLogin(credentialResponse);
        }}
        onError={() => {
          console.error('Login Failed');
        }}
        useOneTap
      />
    </Layout>
  )
}