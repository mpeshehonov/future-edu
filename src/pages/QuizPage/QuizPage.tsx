import React from 'react';
import './styles.scss';
import Quiz from 'react-quiz-component';

import {quizData} from './quizData';
import {Row, Col, Typography} from 'antd';

const {Title} = Typography;

const QuizPage = () => {
  return (
    <>
      <Title>Квиз</Title>
      <Row justify="center">
        <Col span={12}>
          <Quiz quiz={quizData} />
        </Col>
      </Row>
    </>
  );
};

export default QuizPage;
