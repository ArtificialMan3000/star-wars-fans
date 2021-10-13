import React from 'react';
import { SearchResultsColumn } from './SearchResultsColumn';
import style from './search.module.css';

const SearchResults = (props) => {
    // console.log(props.results);
    const searchResults = props.results.map(
        (searchResultsEntry) =>
            searchResultsEntry && (
                <SearchResultsColumn
                    key={searchResultsEntry.type}
                    resultsEntry={searchResultsEntry}
                />
            )
    );
    return <div className={style.results}>{searchResults}</div>;
};

export { SearchResults };
