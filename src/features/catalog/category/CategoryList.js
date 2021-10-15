import React from 'react';
import { useSelector } from 'react-redux';
import { CategoryListItem } from './CategoryListItem';
import { selectCatalogListItems } from '../catalogSelectors';

// Список элементов категории
const CategoryList = (props) => {
    const { type } = props;
    // Забираем данные о элементе из кеша
    const listData =
        useSelector((state) => selectCatalogListItems(state, type)) || [];

    return (
        <div className="catalog-grid">
            {listData.map((itemData) => {
                return (
                    <CategoryListItem
                        key={itemData.id}
                        id={itemData.id}
                        type={itemData.type}
                        title={itemData.title}
                    />
                );
            })}
        </div>
    );
};

export { CategoryList };
