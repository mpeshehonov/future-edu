import React, {useEffect, useState} from 'react';
import {
  Comment,
  Avatar,
  Row,
  Col,
  List,
  Form,
  Button,
  Typography,
  Input,
} from 'antd';
import axios from './../../shared/client';
import {UserOutlined} from '@ant-design/icons';

const {Title} = Typography;
const {TextArea} = Input;

interface Room {
  id: string;
  name: string;
}

interface Message {
  author: string;
  uid: string;
  timestamp: string | null;
  roomId: string;
  message: string;
}

const CommentList = ({comments: messages}) => (
  <List
    dataSource={messages}
    header={`${messages.length} ${
      messages.length > 1 ? 'Сообщений' : 'Сообщение'
    }`}
    itemLayout="horizontal"
    renderItem={(message: Message) => (
      <Comment
        content={message.message}
        author={message.author}
        avatar={<Avatar shape="circle" icon={<UserOutlined />} />}
      />
    )}
  />
);

const Editor = ({onChange, onSubmit, submitting, value}) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Отправить
      </Button>
    </Form.Item>
  </>
);

const ChatPage = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [currentMessage, setCurrentMessage] = useState<string>('');

  useEffect(() => {
    axios
      .get('room')
      .then((r) => setRooms(r.data))
      .then();
  }, []);

  useEffect(() => {
    if (!rooms.length) {
      return;
    }
    setSelectedRoomId(rooms[0].id ?? null);
  }, [rooms]);

  useEffect(() => {
    if (selectedRoomId) {
      axios.get(`messages/${selectedRoomId}`).then((r) => setMessages(r.data));
    }
  }, [selectedRoomId, submitting]);

  const handleChangeMessage = (e) => {
    setCurrentMessage(e.target.value);
  };

  const handleSubmitMessage = () => {
    if (!currentMessage.length) {
      return;
    }

    setSubmitting(true);

    axios
      .post('messages', {
        author: 'Вадим',
        message: currentMessage,
        roomId: selectedRoomId,
      })
      .then(() => setSubmitting(false));
  };

  return (
    <>
      <Title>Чат с преподавателями</Title>
      <Row justify="center">
        <Col span={4}>
          {rooms &&
            rooms.map((room) => (
              <Button type="link" onClick={() => setSelectedRoomId(room.id)}>
                {room.name}
              </Button>
            ))}
        </Col>
        <Col span={12}>
          {messages.length > 0 && <CommentList comments={messages} />}
          <Comment
            avatar={<Avatar shape="circle" icon={<UserOutlined />} />}
            content={
              <Editor
                onChange={handleChangeMessage}
                onSubmit={handleSubmitMessage}
                submitting={submitting}
                value={currentMessage}
              />
            }
          />
        </Col>
      </Row>
    </>
  );
};

export default ChatPage;
