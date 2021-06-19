import React from 'react';
import {Col, Row, Typography, Carousel} from 'antd';

const {Title} = Typography;

const contentStyle = {
    height: '550px',
    color: '#369',
    background: '#ccc'
};

const ComicsPage = () => {
    return (
        <div className={'comics'}>
            <Title>Мораль: "подумай, прежде чем делать" :)</Title>
            <Row justify="center">
                <Col span={5}>
                    <Carousel autoplay  dotPosition='bottom'>
                        <div>
                            <h3 style={contentStyle}><img src="/images/02/comics-01.jpg" alt="1" className={'comics-img'}/></h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}><img src="/images/02/comics-02.jpg" alt="2" className={'comics-img'}/></h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}><img src="/images/02/comics-03.jpg" alt="3" className={'comics-img'}/></h3>
                        </div>
                    </Carousel>
                </Col>
            </Row>
        </div>
    );
};

export default ComicsPage;
