import React from 'react';
import {Col, Row, Typography, Carousel} from 'antd';

const {Title} = Typography;

const contentStyle = {
    height: '680px',
    color: '#369',
    background: '#ccc'
};

const ComicsPage = () => {
    return (
        <div className={'comics'}>
            <Title>Комикс</Title>
            <Row justify="center">
                <Col span={6}>
                    <Carousel autoplay>
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
