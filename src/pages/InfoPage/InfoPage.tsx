import React from 'react';
import {Col, Row, Typography, Tabs} from 'antd';

const {Title} = Typography;
const {TabPane} = Tabs;

const InfoPage = () => {
  return (
    <>
      <Title>Шпаргалка</Title>
      <Row justify="center">
        <Col span={12}>
          <Tabs tabPosition="left">
            <TabPane tab="Пожар" key="1">
              Инфа о пожаре
            </TabPane>
            <TabPane tab="Тушение" key="2">
              Инфа о тушении
            </TabPane>
            <TabPane tab="Вызов пожарных" key="3">
              Инфа о вызове пожарных
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default InfoPage;
