import React from 'react';
import {Comment, Avatar, Row, Col, Typography} from 'antd';

const {Title} = Typography;

const ChatPage = () => {
  return (
    <>
      <Title>Чат с преподавателями</Title>
      <Row justify="center">
        <Col span={12}>
          <Comment
            author="Han Solo"
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
              </p>
            }
          />
        </Col>
      </Row>
    </>
  );
};

export default ChatPage;
