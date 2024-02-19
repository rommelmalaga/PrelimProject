import { useState } from 'react';
import { Button, Layout, theme } from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Logo from './components/Logo';
import MenuList from './components/MenuList';
import ToggleTheme from './components/ToggleTheme';
import Content from './components/Content';



const { Header, Sider, Footer } = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setcollapsed] = useState(false);

  const toggleTheme = () =>{
    setDarkTheme(!darkTheme);
  };

  const {
    token: {colorBgContainer}
    
  } = theme.useToken()
  return (
    <Layout >
      
      <Sider collapsed={collapsed}
       collapsible
       trigger={null}
       theme={darkTheme ? 'dark' : 'light'}
       className='sidebar'>
        <Logo />
        <MenuList darkTheme={darkTheme} />
        <ToggleTheme darkTheme={darkTheme}
        toggleTheme={toggleTheme} />
      </Sider>
      <Header style={{padding: 0, background: colorBgContainer}}>
        <Button type='text'
        className='toggle'
        onClick={()=> setcollapsed(!collapsed)}
        icon={collapsed ?
        <MenuUnfoldOutlined /> :
        <MenuFoldOutlined />}>

        </Button>
        
      </Header>
      <Content />
      
      

    </Layout>
  )
}

export default App
