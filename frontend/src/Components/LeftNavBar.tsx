import React, { useState } from 'react';
import {FcInTransit, FcShop,FcDepartment, 
    // FcCamera, FcPicture, FcDocument, FcHome,
    FcSettings,FcAddressBook,FcCurrencyExchange, 
    FcSearch, FcComboChart, FcShipped} from 'react-icons/fc';
import type { MenuProps} from 'antd';
import {Menu} from 'antd';

type MenuItem = Required<MenuProps>['items'][number];


function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<a href="/Purchases">Purchase</a>, '1', <FcShipped />),
  getItem(<a href="/Sales">Sales</a>, '2', <FcInTransit />),
  getItem(<a href="Parties">Buyer/ Seller</a>, '3', <FcAddressBook />),
  getItem('Team', 'sub2',<FcSettings /> , [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem(<a href="/Settings">Settings</a>, '9', <FcSettings />),
  getItem(<a href="/Money">Money Flow</a>, '10', <FcCurrencyExchange />),
  getItem(<a href="/bank">Bank</a>, '15', <FcCurrencyExchange />),
  getItem(<a href="/Stock">Inventory</a>, '11', <FcDepartment />),
  getItem(<a href="/BalanceSheet">Balance Sheet</a>, '12', <FcShop />),
  getItem(<a href="/Search">FcSearch</a>, '13', <FcSearch />),
  getItem(<a href="/Graphics">Graphics</a>, '14', <FcComboChart />)
];


const LeftNavBar= () => {

  const [current, setCurrent] = useState('1');
  const onClick: MenuProps['onClick'] = (e: { key: React.SetStateAction<string>; }) => {
    console.log('click ', e);
    setCurrent(e.key);
  };


return(
    <>
    <div className="demo-logo-vertical" />      
      
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      selectedKeys={[current]}
      style={{ height: '100%', borderRight: 0 }}
      items={items}
      onClick={onClick}
    />
</>
)
}


export default LeftNavBar;
