import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Input, Layout, Avatar, Badge, Menu} from 'antd';
import {UserOutlined, SketchOutlined} from '@ant-design/icons';
import './styles.scss';

const Header = () => {
  const location = useLocation();
  const currentPathname = location.pathname.split('/').pop() ?? '';

  return (
    <>
      <Layout.Header className="header">
        <Link to="/" className="header__logo">
          <img src="/logo.svg" alt="NOVA" /> NOVA
        </Link>
        <div className="header__search">
          <Input
            className="header__search-input"
            placeholder="Как вести себя при пожаре?"
          />
        </div>
        <div className="header__user user">
          Вадим Анатольевич Чижов &nbsp;
          <Badge
            count={<SketchOutlined className="user__badge-icon" />}
            offset={[-30, 25]}
            size="default"
          >
            <Avatar shape="circle" icon={<UserOutlined />} />
          </Badge>
        </div>
      </Layout.Header>
      <Menu mode="horizontal" selectedKeys={[currentPathname]}>
        <Menu.Item key="courses">
          <Link to="/courses">Курсы</Link>
        </Menu.Item>
        <Menu.Item key="chat">
          <Link to="/chat">Общение с преподавателями</Link>
        </Menu.Item>
        <Menu.Item key="contacts">
          <Link to="/contacts">Контакты</Link>
        </Menu.Item>
        <Menu.Item key="support">
          <Link to="/support">Служба поддержки</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Header;
