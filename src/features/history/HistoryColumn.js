import React from 'react';
import style from './history.module.css';
import capitalize from 'lodash.capitalize';

const HistoryColumn = (props) => {
    const historyList = props.list.map((historyItem) => (
        <li key={historyItem.url}>
            <a href={`${historyItem.type}/${historyItem.id}`}>
                {historyItem.title || historyItem.name}
            </a>
        </li>
    ));
    return (
        <div className={style.historyColumn}>
            <h2>{capitalize(props.type)}</h2>
            <ul className={style.historyList}>{historyList}</ul>
        </div>
    );
};

export { HistoryColumn };
