import React from 'react';
import Iframe from 'react-iframe';
import {Typography} from 'antd';
import './styles.scss';

const {Title} = Typography;

const TrainerPage = () => {
  return (
    <>
      <Title>Тренажер</Title>
      <Iframe
        url="http://194.169.160.247/"
        className="trainer"
        position="relative"
      />
    </>
  );
};

export default TrainerPage;
