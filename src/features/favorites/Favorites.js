import { useSelector, useDispatch } from 'react-redux';
//eslint-disable-next-line
import { removeFromFavoritesThunk } from './favoritesThunks';
import { FavoritesColumn } from './FavoritesColumn';
import style from './favorites.module.css';

export function Favorites() {
    //eslint-disable-next-line
    const dispatch = useDispatch();
    //eslint-disable-next-line
    const login = useSelector((state) => state.auth.user.userName);

    ///////////////////////////////////////////////////////////////////
    /*          Три массива с Id по категориям (ID === String)       */
    ///////////////////////////////////////////////////////////////////
    const { films, people, planets } = useSelector(
        (state) => state.auth.favorites
    );

    console.log(films, people, planets);

    ///////////////////////////////////////////////////////////////////////////////
    //
    // Диспатчить эту функцию для удаления элемента из Избранного (удалится везде):
    // dispatch(removeFromFavoritesThunk(login, type, index));
    //
    ///////////////////////////////////////////////////////////////////////////////
    //
    // с параметрами:
    // (login-имя пользователя, type-'films','people' или 'planets',
    // index-индекс элемента в массиве)
    //
    ///////////////////////////////////////////////////////////////////////////////

    // return (
    //     <div className="body">
    //         <h1>Избранное</h1>
    //         <div className={style.favorites}>
    //             {planets.length > 0 && (
    //                 <FavoritesColumn key="films" list={films} type="films" />
    //             )}
    //             {planets.length > 0 && (
    //                 <FavoritesColumn key="people" list={people} type="people" />
    //             )}
    //             {planets.length > 0 && (
    //                 <FavoritesColumn
    //                     key="planets"
    //                     list={planets}
    //                     type="planets"
    //                 />
    //             )}
    //         </div>
    //     </div>
    // );
}
