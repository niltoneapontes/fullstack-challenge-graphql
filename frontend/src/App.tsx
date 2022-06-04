import React, { useState } from 'react';
import {graphql} from 'react-relay';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

import { PageHeader, Input, Col, Layout, Menu, Typography, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined,
  UserOutlined,
  ShoppingOutlined,
  LogoutOutlined,
  FireTwoTone, } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Suspense } = React;

// Define a query
const RepositoryNameQuery = graphql`
  query AppQuery {
    hello
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, RepositoryNameQuery, {
  /* query variables */
});

function App(props: any) {
  const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);

  const [collapsed, setCollapsed] = useState<boolean>(false);

  const {Header, Content, Footer, Sider} = Layout;
  const { Title } = Typography;

  return (
    <Layout className='site-layout-background' style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <FireTwoTone twoToneColor={"#06A77D"} style={{fontSize: 48}} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <ShoppingOutlined />,
              label: 'Minha Loja',
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: 'Profile',
            },
            {
              key: '3',
              icon: <LogoutOutlined />,
              label: 'Logout',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '12px 24px',
          }}
        >
            {collapsed ? <MenuUnfoldOutlined style={{color: '#f5f5f5', fontSize: 18}} onClick={() => setCollapsed(false)} /> : <MenuFoldOutlined style={{color:"#F5F5F5", fontSize: 18}} onClick={() => setCollapsed(true)} />}
            <PageHeader title={<Title level={2} style={{color: '#F5F5F5', margin: 0, paddingLeft: 24}}>Minha loja</Title>} style={{ padding: 0 }}/>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Button type='primary'>Enviar</Button>
        </Content>
        <Footer style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 8}}>
          Made with ❤️ by Nilton
        </Footer>
      </Layout>
    </Layout>
  );
}

function AppRoot(props: any) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;