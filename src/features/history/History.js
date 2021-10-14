import { useSelector, useDispatch } from 'react-redux';
//eslint-disable-next-line
import { removeFromHistoryThunk } from './historyThunks';
import { HistoryColumn } from './HistoryColumn';
import style from './history.module.css';

export function History() {
    //eslint-disable-next-line
    const dispatch = useDispatch();
    //eslint-disable-next-line
    const login = useSelector((state) => state.auth.user.userName);

    /////////////////////////////////////////////////////////////////////////////
    /*          Три массива со строками запросов по категориям (query === String)       */
    /////////////////////////////////////////////////////////////////////////////
    const { films, people, planets } = useSelector(
        (state) => state.auth.history
    );
    console.log(films, people, planets);

    ///////////////////////////////////////////////////////////////////////////////
    //
    // Диспатчить эту функцию для удаления элемента из Избранного (удалится везде):
    // dispatch(removeFromHistoryThunk(login, type, index));
    //
    ///////////////////////////////////////////////////////////////////////////////
    //
    // с параметрами:
    // (login-имя пользователя, type-'films','people' или 'planets',
    // index-индекс элемента в массиве)
    //
    ///////////////////////////////////////////////////////////////////////////////

    return (
        <div className="body">
            <h1>История поиска</h1>
            <div className={style.history}>
                {films.length > 0 && (
                    <HistoryColumn key="films" list={films} type="films" />
                )}
                {people.length > 0 && (
                    <HistoryColumn key="people" list={people} type="people" />
                )}
                {planets.length > 0 && (
                    <HistoryColumn
                        key="planets"
                        list={planets}
                        type="planets"
                    />
                )}
            </div>
        </div>
    );
}
