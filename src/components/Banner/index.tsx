import { useEffect, useState } from 'react';
import { history, Link } from 'umi';
import styles from './index.less';
import { Button, Menu , MenuProps} from 'antd';
import {
  HomeOutlined ,
  ContainerOutlined,
  HeartOutlined,
  UserOutlined,
  LikeOutlined,
} from '@ant-design/icons';
const Banner = () => {
  type MenuItem = Required<MenuProps>['items'][number];
  const items: MenuItem[] = [
    { key: '1', icon: <HomeOutlined  />, label: 'Home' },
    { key: '2', icon: <ContainerOutlined />, label: 'Contents' },
    {
      key: 'sub1',
      label: 'HS’s Contents',
      icon: <UserOutlined />,
      children: [
        { key: '3', icon:<LikeOutlined />, label: 'Upvotes' },
        { key: '4', icon:<HeartOutlined />, label: 'Favorites' },
      ],
    },
    // {
    //   key: 'sub2',
    //   label: 'Navigation Two',
    //   icon: <AppstoreOutlined />,
    //   children: [
    //     { key: '9', label: 'Option 9' },
    //     { key: '10', label: 'Option 10' },
    //     {
    //       key: 'sub3',
    //       label: 'Submenu',
    //       children: [
    //         { key: '11', label: 'Option 11' },
    //         { key: '12', label: 'Option 12' },
    //       ],
    //     },
    //   ],
    // },
  ];

  const keyItem = [
    {key:'1',label: 'home'},
    {key:'2',label: 'contents'},
    {key:'3',label: 'upvotes'},
    {key:'4',label: 'favorites'}
  ]

  const [collapsed, setCollapsed] = useState(false);


  const onSelect = ({key}:{key:string})=>{
    for (let index = 0; index < keyItem.length; index++) {    
      if(keyItem[index].key===key && keyItem[index].key !== '1'){ 
        history.push(`/${keyItem[index].label}`);
        break;
      }else{
        history.push('/');
      }
      
    }
  }

  return (
    <div className={styles['banner']}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
        onSelect={onSelect}
      />
    </div>
  );
};

export default Banner;
