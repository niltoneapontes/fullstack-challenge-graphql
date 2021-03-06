import React, { useEffect, useState } from 'react';
import {graphql} from 'react-relay';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from '../RelayEnvironment';

import { PageHeader, Input, Col, Layout, Menu, Typography, Button, Card, Image, Grid, Row, Tag, Avatar } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined,
  UserOutlined,
  ShoppingOutlined,
  LogoutOutlined,
  FireTwoTone,
  PlusOutlined,
  PlusCircleOutlined,
  PlusCircleTwoTone,
  GooglePlusOutlined, } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { AddRealtyModal } from '../components/AddRealtyModal';
import { globalContext } from '../context/globalContext';
import jwtDecode from 'jwt-decode';

const { Suspense } = React;

function Profile(props: any) {
  const { saveUserInfo, getUserInfo } = globalContext();

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [addModal, setAddModal] = useState<boolean>(false);
  const [user, setUser] = useState<any>({});

  const {Header, Content, Footer, Sider} = Layout;
  const { Title, Paragraph, Text } = Typography;

  useEffect(() => {
    const userCredential = getUserInfo();
    const userInfo = jwtDecode(userCredential);
    setUser(userInfo);
  }, [])

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
          defaultSelectedKeys={['2']}
          items={[
            {
              key: '1',
              icon: <ShoppingOutlined />,
              label: 'Minha Vitrine',
              onClick: () => {
                window.location.href = '/';
              }
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: 'Perfil',
            },
            {
              key: '3',
              icon: <LogoutOutlined />,
              label: 'Logout',
              onClick: () => {
                saveUserInfo('');
                window.location.replace('/signin');
              }
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
            <PageHeader title={<Title level={2} style={{color: '#F5F5F5', margin: 0, paddingLeft: 24}}>Meu perfil</Title>} style={{ padding: 0 }}/>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Row>
            <Col xs={24} md={12} lg={8}>
              <Card title="Dados pessoais" style={{ width: '100%' }}>
                <Avatar size={56} icon={<UserOutlined />} style={{marginBottom: 16}} />
                <Paragraph>
                  <Text strong>Nome: </Text>
                  <Text>{user.name}</Text>
                </Paragraph>
                <Paragraph>
                  <Text strong>E-mail: </Text>
                  <Text>{user.email}</Text>
                </Paragraph>
                {
                user.email_verified ? 
                  <Tag color="#87d068">E-mail verificado</Tag> : <Tag color="#ff4005">E-mail n??o verificado</Tag>
                }
              </Card>
            </Col>
          </Row>
        </Content>
        <Footer style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 8}}>
          Made with ?????? by Nilton
        </Footer>
        <Button type="primary" onClick={() => setAddModal(true)} style={{position: 'absolute', right: 24, bottom: 24, height: 56, width: 56, borderRadius: '50%'}}>
          <PlusOutlined />
        </Button>
        {addModal && (
      <AddRealtyModal setAddModal={setAddModal} />
    )}
      </Layout>
    </Layout>
  );
}

function ProfileRoot(props: any) {
  const {Title} = Typography;

  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={
                    <Layout style={{background: '#001529', width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <div style={{textAlign: 'center', padding: '20px'}}>
                        <FireTwoTone twoToneColor={"#06A77D"} style={{fontSize: 48}} />
                        <Title level={3} style={{color: '#F5F5F5', margin: 24}}>Loading...</Title>
                      </div>
                  </Layout>
      }>
        <Profile/>
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default ProfileRoot;