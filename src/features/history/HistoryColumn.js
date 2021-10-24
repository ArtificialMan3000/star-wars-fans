import React from 'react';
import { Link } from 'react-router-dom';
import capitalize from 'lodash.capitalize';

const HistoryColumn = (props) => {
    const type = props.type;
    const historyList = props.list.map((historyItem) => {
        const id = historyItem.id;
        const url = `/catalog/${type}/${id}`;
        const title = historyItem.title;
        return (
            <li key={url}>
                <Link to={url}>{title}</Link>
            </li>
        );
    });
    return (
        <div className="history-column">
            <h2>{capitalize(type)}:</h2>
            <ul>{historyList}</ul>
        </div>
    );
};

export { HistoryColumn };
