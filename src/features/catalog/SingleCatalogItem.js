import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { LoadingMessage } from './messages/LoadingMessage';
import { ErrorMessage } from './messages/ErrorMessage';
import { FavoriteButton } from './FavoriteButton';

// Карточка элемента каталога
export default function SingleCatalogItem(props) {
    const {
        type,
        itemData,
        fetchSingleItem,
        singleItemUnmounted,
        renderDescription,
    } = props;
    // Забираем данные об элементе из стора
    const [catalogItem, fetchStatus, fetchError] = itemData;

    // Получаем id элемента из адресной строки
    const { id: itemId } = useParams();

    const dispatch = useDispatch();
    // Запрашиваем элемент
    useEffect(() => {
        if (fetchStatus === 'idle') {
            dispatch(fetchSingleItem(itemId));
        }
    }, [fetchStatus, itemId, dispatch, fetchSingleItem]);

    // Сбрасываем состояние запроса при размонтировании компонента
    useEffect(() => {
        return () => {
            dispatch(singleItemUnmounted());
        };
    }, [dispatch, singleItemUnmounted]);

    // Обработчик нажатия кнопки избранного
    const buttonClickHandler = () => {
        // Диспатчим нажатие кнопки, передаём тип элемента и id
        // dispatch(addToFavorites(type, itemId));
    };

    // Компонент для рендера
    let renderedComponent;

    // В зависимости от статуса запроса рендерим разные компоненты
    switch (fetchStatus) {
        case 'fulfilled':
            renderedComponent = (
                <div className={`single-${type}`}>
                    <h1>{catalogItem.title || catalogItem.name}</h1>
                    {renderDescription(catalogItem)}
                    <FavoriteButton
                        disabled={false}
                        onClick={buttonClickHandler}
                        type="button"
                    />
                </div>
            );
            break;
        case 'rejected':
            renderedComponent = <ErrorMessage error={fetchError} />;
            break;
        default:
            renderedComponent = <LoadingMessage />;
    }

    return <div className="body">{renderedComponent}</div>;
}

export { SingleCatalogItem };
