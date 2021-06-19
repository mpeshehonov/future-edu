import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import {Typography} from 'antd';

const {Title} = Typography;

const CoursePage = () => {
    const params = useRouteMatch<any>('/courses/:id');

    return (
        <div className={'course'}>
            <img src="/images/fire.png" alt="fire"/>
            <Title>Курс по обучению<br/> пожарной безопасности</Title>
            <p>В каждом разделе есть достижения, <br/> попробуй получить их все!</p>
            <div className={'row'}>
                <div className={'cell'}>
                    <Link to={`/courses/${params?.params.id}/info`}>
                        <img src='/images/crib.png' alt="Шпаргалка"/><br/>
                        Теоретическая подготовка
                    </Link>
                </div>
                <div className={'cell'}>
                    <Link to={`/courses/${params?.params.id}/quiz`}>
                        <img src='/images/quiz.png' alt="Квиз"/><br/>
                        Тестовые задания с<br/> вариантами ответа
                    </Link>
                </div>
                <div className={'cell'}>
                    <Link to={`/courses/${params?.params.id}/puzzle`}>
                        <img src='/images/puzzle.png' alt="Пазл"/><br/>
                        Задания с<br/> расстановкой<br/> картинок
                    </Link>
                </div>
                <div className={'cell'}>
                    <Link to={`/courses/${params?.params.id}/comics`}>
                        <img src='/images/comics.png' alt="Комикс"/><br/>
                        Интерактивная<br/> подготовка
                    </Link>
                </div>
                <div className={'cell'}>
                    <Link to={`/courses/${params?.params.id}/trainer`}>
                        <img src='/images/trainer.png' alt="Тренажёр"/><br/>
                        Испытай себя в 3D<br/> тренажёре
                    </Link>
                </div>
            </div>
            <p className={'f24'}><br/><br/>Выполните все задания, чтобы получить необходимые знания и открыть доступ к тренажёру</p>
        </div>
    );
};

export default CoursePage;
