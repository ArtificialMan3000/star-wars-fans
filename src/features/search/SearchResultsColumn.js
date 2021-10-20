import React from 'react';
import capitalize from 'lodash.capitalize';

const SearchResultsColumn = (props) => {
    const searchResults = props.resultsEntry.results.map((result) => {
        const url = `/catalog/${result.type}/${result.id}`;
        const id = result.id;
        const title = result.title;
        const type = result.type;
        return (
            <li key={url}>
                <a
                    // При клике передаём данные для записи в историю поиска
                    onClick={() =>
                        props.resultLinkClickHandler(type, {
                            id,
                            title,
                        })
                    }
                    href={url}
                >
                    {title}
                </a>
            </li>
        );
    });
    return (
        <div className="search-column">
            <h2>{capitalize(props.resultsEntry.type)}:</h2>
            <ul>{searchResults}</ul>
        </div>
    );
};

export { SearchResultsColumn };
