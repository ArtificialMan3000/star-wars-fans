import React from 'react';
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
        <div className="history-column">
            <h2>{capitalize(props.type)}:</h2>
            <ul>{historyList}</ul>
        </div>
    );
};

export { HistoryColumn };
