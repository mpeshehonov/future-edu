import React from 'react';
import {Col, Row, Typography, Carousel} from 'antd';

const {Title} = Typography;

const ComicsPage = () => {
  return (
    <>
      <Title>Шпаргалка</Title>
      <Row justify="center">
        <Col span={12}>
          <Carousel dotPosition="right">
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </Col>
      </Row>
    </>
  );
};

export default ComicsPage;
