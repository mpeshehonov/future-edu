import React, {FC} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {Layout, Button} from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';
import Header from '../Header';
import './styles.scss';

const PageLayout: FC = ({children}) => {
  const location = useLocation();
  const history = useHistory();
  return (
    <Layout className="layout">
      <Header />
      <Layout>
        <Layout.Content className="layout-content">
          {location.pathname !== '/' && (
            <Button
              type="primary"
              onClick={() => history.goBack()}
              style={{marginBottom: 16, marginLeft: 16, float: 'right'}}
            >
              <ArrowLeftOutlined />
              Назад
            </Button>
          )}
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
