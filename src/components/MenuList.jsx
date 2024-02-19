import React from 'react';
import { Menu } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';
import { CompassOutlined } from '@ant-design/icons';
import { PlayCircleOutlined  } from '@ant-design/icons';
import { HeartOutlined } from '@ant-design/icons';
import { PlusSquareOutlined } from '@ant-design/icons';
import { MessageOutlined } from '@ant-design/icons';
import { InfoCircleOutlined } from '@ant-design/icons';
import { BarsOutlined } from '@ant-design/icons';
const MenuList = ( { darkTheme } ) => {
    return (
        <Menu theme={darkTheme ? 'dark' : 'light'} mode='inline' className='menu' >
            <Menu.Item key="home" icon = {<HomeFilled />}>
                Home
            </Menu.Item>
            <Menu.Item key="search" icon = {<SearchOutlined />}>
                Search
            </Menu.Item>
            <Menu.Item key="Explore" icon = {<CompassOutlined />}>
                Explore
            </Menu.Item>
            <Menu.Item key="reels" icon = {<PlayCircleOutlined />}>
                Reels
            </Menu.Item>
            <Menu.Item key="message" icon = {<MessageOutlined />}>
                Message
            </Menu.Item>
            <Menu.Item key="notification" icon = {<HeartOutlined />}>
                Notification
            </Menu.Item>
            <Menu.Item key="creare" icon = {<PlusSquareOutlined />}>
                Create
            </Menu.Item>
            <Menu.Item key="Profile" icon = {<InfoCircleOutlined />}>
                Profile
            </Menu.Item>

            
            <Menu.Item key='submore' >
            </Menu.Item >
            
            
            
            <Menu.Item key='submore' icon={<BarsOutlined />} >
                 More
            </Menu.Item >
           
            
        </Menu>
    )
}
export default MenuList;