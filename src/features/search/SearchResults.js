import React from 'react';
import { useSelector } from 'react-redux';
import { selectSearchResults } from './searchSelectors';

import { SearchResultsColumn } from './SearchResultsColumn';

const SearchResults = (props) => {
    const results = useSelector(selectSearchResults);

    const searchResults = results.map((searchResultsEntry) => {
        return (
            searchResultsEntry && (
                <SearchResultsColumn
                    key={searchResultsEntry.type}
                    resultsEntry={searchResultsEntry}
                    resultLinkClickHandler={props.resultLinkClickHandler}
                />
            )
        );
    });
    return <>{searchResults}</>;
};

export { SearchResults };
