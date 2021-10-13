import React from 'react';
import { SearchResultsColumn } from './SearchResultsColumn';

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
    return <>{searchResults}</>;
};

export { SearchResults };
