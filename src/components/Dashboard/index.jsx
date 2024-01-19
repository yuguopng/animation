import { Layout, Flex } from 'antd';
import { Outlet } from 'react-router-dom'
import './index.css'

const { Header, Footer, Sider, Content } = Layout;

const Dashboard = (props) => {
  return (
    <Layout className='Dashboard'>
      <Sider className='Dashboard-sider'>
        Sider
      </Sider>
      <Layout className='Dashboard-content'>
        <Header className='Dashboard-content-header'>Header</Header>
        <Content className='Dashboard-content-body'>
          <Outlet />
        </Content>
        <Footer className='Dashboard-content-footer'>Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default Dashboard