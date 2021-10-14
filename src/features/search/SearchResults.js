import React from 'react';
import { SearchResultsColumn } from './SearchResultsColumn';

const SearchResults = (props) => {
    const searchResults = props.results.map(
        (searchResultsEntry) =>
            searchResultsEntry && (
                <SearchResultsColumn
                    key={searchResultsEntry.type}
                    resultsEntry={searchResultsEntry}
                    resultLinkClickHandler={props.resultLinkClickHandler}
                />
            )
    );
    return <>{searchResults}</>;
};

export { SearchResults };
