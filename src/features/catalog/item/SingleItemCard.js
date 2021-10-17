import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Description } from './Description';
import { SpecificationsList } from './SpecificationsList';
import {
    addToFavoritesThunk,
    removeFromFavoritesThunk,
} from '../../favorites/favoritesThunks';
import {
    getPersonImage,
    getPlanetImage,
    getFilmImage,
} from '../../../auxiliary/getImages';
import { selectCatalogItem } from '../catalogSelectors';

// Карточка элемента каталога
function SingleItemCard(props) {
    const { type, id: itemId } = props;
    // Забираем данные о элементе из кеша
    const itemData = useSelector((state) =>
        selectCatalogItem(state, type, {
            id: itemId,
        })
    );

    const dispatch = useDispatch();

    ///////////////////////////////////////////////////////////////////////
    /*   Функционал для работы с добавлением и удалением из Избранного   */
    ///////////////////////////////////////////////////////////////////////
    const login = useSelector((state) => state.auth.user.userName);
    const favorites = useSelector((state) => state.auth.favorites)[type];
    const index = favorites.findIndex((el) => el.itemId === `${itemId}`);
    const isInFavorite = index === -1 ? false : true;

    /*                         Buttons On Click Handlers                 */
    const addToFavoritesHandler = (title) => {
        dispatch(addToFavoritesThunk(login, type, itemId, title));
    };

    const removeFromFavoritesHandler = () => {
        dispatch(removeFromFavoritesThunk(login, type, index));
    };
    ///////////////////////////////////////////////////////////////////////

    // Рендерим содержимое, только если есть данные об элементе
    if (!itemData) {
        return <div className={`single-${type}`}>Ожидание</div>;
    }
    return (
        <div className={`single-${type}`}>
            <h1>{itemData.title}</h1>
            {itemData.view.method === 'description' && (
                <Description
                    episodeId={itemData.episodeId}
                    openingCrawl={itemData.openingCrawl}
                />
            )}
            {itemData.view.method === 'specifications' && (
                <SpecificationsList
                    specifications={itemData.view.fields.map(
                        (specification) => {
                            return {
                                name: specification,
                                value: itemData[specification],
                            };
                        }
                    )}
                />
            )}
            <div className="catalog-image">
                <img
                    src={
                        type === 'people'
                            ? getPersonImage(itemId)
                            : type === 'films'
                            ? getFilmImage(itemId)
                            : getPlanetImage(itemId)
                    }
                    alt={itemData.title || itemData.name}
                />
            </div>
            {!isInFavorite && (
                <button
                    className="favorite-button"
                    onClick={() =>
                        addToFavoritesHandler(itemData.title || itemData.name)
                    }
                >
                    Добавить в избранное
                </button>
            )}
            {isInFavorite && (
                <button
                    className="favorite-button"
                    onClick={removeFromFavoritesHandler}
                >
                    Удалить из избранного
                </button>
            )}
        </div>
    );
}

export { SingleItemCard };
