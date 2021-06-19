import React, {useState} from 'react';
import './styles.scss';

export interface Card {
    id?: number,
    order?: number,
    text?: string
}

const DndPage = () => {
    const [cardList, setCardList] = useState([
        {id: 1, order: 3, text: 'Подождать закипания воды'},
        {id: 2, order: 1, text: 'Налить воды в чайник'},
        {id: 3, order: 2, text: 'Поставить чайник на плитку'},
        {id: 4, order: 4, text: 'Включить нагрев плитки'},
        {id: 5, order: 5, text: 'Выключить плитку'},
    ]);

    let [dndResult, setDndResult] = useState('');

    const correctAnswer = [2, 3, 4, 1, 5];

    const [currentCard, setCurrentCard] = useState({});

    const dragStartHandler = (event: React.DragEvent<HTMLDivElement>, card: Card) => {
        dndResult = '';
        setCurrentCard(card);
    }

    const dragEndHandler = (event: React.DragEvent<HTMLDivElement>) => {
        (event.target as HTMLDivElement).style.background = '#fff';
    }

    const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        (event.target as HTMLDivElement).style.background = '#eee';
    }

    const dropHandler = (event: React.DragEvent<HTMLDivElement>, card: Card) => {
        event.preventDefault();
        setCardList(cardList.map(c => {
            if (c.id === card.id) {
                return {...c, order: currentCard['order']}
            }
            if (c.id === currentCard['id']) {
                return {...c, order: card.order}
            }
            return c;
        }));
        (event.target as HTMLDivElement).style.background = '#fff';
    }

    const sortCards = (a, b) => {
        return (a.order > b.order) ? 1 : -1;
    }

    return (
        <div className={'page-content'}>
            <h2>Кипятим воду в чайнике.</h2>
            <p>Выберите корректную последовательность:</p>
            <div className={'steps-block'}>
                {cardList.sort(sortCards).map(card =>
                    <div key={card.id}
                         className={'card'}
                         draggable={"true"}
                         onMouseDown={() => setDndResult('')}
                         onDragStart={event => dragStartHandler(event, card)}
                         onDragLeave={event => dragEndHandler(event)}
                         onDragEnd={event => dragEndHandler(event)}
                         onDragOver={event => dragOverHandler(event)}
                         onDrop={event => dropHandler(event, card)}
                    >
                        {card.text}
                    </div>
                )}
            </div>
            <button className={'submit-button'} onClick={() => setDndResult(
                JSON.stringify(cardList.map(item => item.id)) === JSON.stringify(correctAnswer)
                    ? 'Ответ корректный'
                    : 'Ответ некорректный')}>Проверить</button>
            <div className={JSON.stringify(cardList.map(item => item.id)) === JSON.stringify(correctAnswer) ? 'ok' : 'not-ok'}>
                {dndResult}
            </div>
        </div>
    );
};

export default DndPage;
