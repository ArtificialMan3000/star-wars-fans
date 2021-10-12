import React from 'react';

const SearchSuggestions = (props) => {
    const suggestionsElems = props.suggestions.map((suggestion) => {
        return (
            <li key={suggestion.url}>
                <a href={`/${suggestion.type}/${suggestion.id}`}>
                    {suggestion.title || suggestion.name}
                </a>
            </li>
        );
    });
    return <ul className="search-suggestions">{suggestionsElems}</ul>;
};

export { SearchSuggestions };
