import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import {Row, Col, Typography} from 'antd';

const {Title} = Typography;

const CoursePage = () => {
  const params = useRouteMatch<any>('/:id');

  return (
    <>
      <Title>Курс по пожарной безопасности</Title>
      <Row justify="center">
        <Col span={12}>
          <Link to={`/${params?.params.id}/quiz`}>Квиз</Link>
        </Col>
      </Row>
    </>
  );
};

export default CoursePage;
