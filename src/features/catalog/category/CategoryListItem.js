import React from 'react';
import { Link } from 'react-router-dom';
import { CATALOG_STRINGS } from '../catalogStrings';

// Единица списка элементов
const CategoryListItem = (props) => {
    const { id, type, title } = props;
    return (
        <div className="category-item">
            <h3>{title}</h3>
            <Link to={`/catalog/${type}/${id}`}>
                {CATALOG_STRINGS.categoryListItemLink}
            </Link>
        </div>
    );
};

export { CategoryListItem };
