import React from 'react';
import {Input, Layout, Avatar, Badge} from 'antd';
import {UserOutlined, SketchOutlined} from '@ant-design/icons';

import './styles.scss';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
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
          <Avatar shape="square" icon={<UserOutlined />} />
        </Badge>
      </div>
    </Layout.Header>
  );
};

export default Header;
