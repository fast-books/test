import React, {useState} from 'react';
import {Layout, theme } from 'antd';
import LeftNavBar from './Components/LeftNavBar';
import Breadcrumbs from './Components/Breadcrumbs';
import FooterContent from './Components/FooterContent';
import Floaters from './Components/pieces/Floaters';
import { Route, Routes } from 'react-router-dom';
import Sale from './Pages/Sale';
import Purchase from './Pages/Purchase';
import Stock  from './Pages/Stock';
import Party from './Pages/Party';
import Bank from './Pages/Bank';
const { Header, Content, Footer, Sider } = Layout;


const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight:'100vh'}}>
      <Sider collapsible  
      collapsed={collapsed} 
      onCollapse={(value: boolean | ((prevState: boolean) => boolean)) => setCollapsed(value)}>
      <Header style={{ padding: 0, background: colorBgContainer }} />
      <LeftNavBar/>
      </Sider>
       
      <Layout>
        <Content style={{ margin: '16px 24px' }}>
          <Breadcrumbs/>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer}}>
            <Routes>
              <Route path="/sale" element={<Sale/>} />
              <Route path="/purchase" element={<Purchase/>} />
              <Route path="/bank" element={<Bank/>}/>
              <Route path="/Stock" element={<Stock/>} />
              <Route path="/Stock/:id" element={<Stock/>} />
              <Route path="/party/" element={<Party/>} />
              <Route path="/party/:id" element={<Party/>} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <FooterContent/>
        </Footer>
      </Layout>
      <Floaters/>
    </Layout>
  );
};

export default App;
