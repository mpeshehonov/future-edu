import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Card, Progress, Typography} from 'antd';
import './styles.scss';

const {Title} = Typography;

const CoursesPage = () => {
  return (
    <>
      <Title>Курсы</Title>
      <Row justify="center">
        <Col span={12}>
          <Link to="/1">
            <Card title="Пожарная безопасность" style={{width: 300}}>
              <Progress percent={100} size="small" status="normal" />
              <Progress percent={80} size="small" status="success" />
              <Progress percent={30} size="small" status="exception" />
            </Card>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default CoursesPage;
