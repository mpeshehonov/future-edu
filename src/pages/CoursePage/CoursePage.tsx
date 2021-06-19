import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import {Row, Col, Typography} from 'antd';

const {Title} = Typography;

const CoursePage = () => {
  const params = useRouteMatch<any>('/courses/:id');

  return (
    <>
      <Title>Курс по пожарной безопасности</Title>
      <Row justify="center">
        <Col span={12}>
          <Link to={`/courses/${params?.params.id}/quiz`}>Квиз</Link>
          <br />
          <Link to={`/courses/${params?.params.id}/trainer`}>Тренажер</Link>
        </Col>
      </Row>
    </>
  );
};

export default CoursePage;
