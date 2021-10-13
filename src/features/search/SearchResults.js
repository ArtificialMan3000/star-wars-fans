import React from 'react';

const SearchResults = (props) => {
    const searchResults = props.results.map((result) => (
        <li key={result.url}>
            <a href={`/${result.type}/${result.id}`}>
                {result.title || result.name}
            </a>
        </li>
    ));
    return (
        <div className="search-results">
            <ul>{searchResults}</ul>
        </div>
    );
};

export { SearchResults };
