import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Card, Progress, Typography} from 'antd';
import './styles.scss';
import axios from 'axios';

const {Title} = Typography;

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get('http://194.169.160.247/api/rest/courseMaterial')
      .then((r) => setCourses(r.data));
  }, []);

  console.log(courses);

  return (
    <>
      <Title>Курсы</Title>
      <Row justify="center">
        <Col span={4}>
          <Link to="/courses/1">
            <Card title="Пожарная безопасность" style={{width: 300}}>
              <Progress percent={100} size="small" status="normal" />
              <Progress percent={80} size="small" status="success" />
              <Progress percent={30} size="small" status="exception" />
            </Card>
          </Link>
        </Col>
        <Col span={4}>
          <Link to="/courses/dnd">
            <Card title="Техника безопасности" style={{width: 300}}>
              <Progress percent={90} size="small" status="normal" />
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
