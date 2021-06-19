import React from 'react';
import {Layout} from 'antd';
import './styles.scss';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <Layout.Header className="header">
      <Link to="/" className="header__logo">
        <img src="/logo.svg" alt="NOVA" /> NOVA
      </Link>
      <div className="header__user">Вадим Анатольевич Чижов</div>
    </Layout.Header>
  );
};

export default Header;
