import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import 'antd/dist/antd.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

import AppRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';
import GlobalProvider from './context/globalContext';
import { Layout, Typography } from 'antd';
import { FireTwoTone } from '@ant-design/icons';

const { Suspense } = React;

function App(props: any) {
  return (
    <BrowserRouter>
        <AppRoutes></AppRoutes>
    </BrowserRouter>
  )
}

function AppRoot(props: any) {
  const {Title} = Typography;

  return (
    <GlobalProvider>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <GoogleOAuthProvider clientId="1068919723966-hpb3l9obl846ci22bcsfmslcl9t4s8hl.apps.googleusercontent.com">
          <Suspense fallback={
                    <Layout style={{background: '#001529', width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{textAlign: 'center', padding: '20px'}}>
                      <FireTwoTone twoToneColor={"#06A77D"} style={{fontSize: 48}} />
                      <Title level={3} style={{color: '#F5F5F5', margin: 24}}>Loading...</Title>
                    </div>
                </Layout>
          }>
            <App />
          </Suspense>
        </GoogleOAuthProvider>
      </RelayEnvironmentProvider>
    </GlobalProvider>
  );
}

export default AppRoot;