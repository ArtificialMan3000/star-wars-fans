import { useSelector, useDispatch } from 'react-redux';
//eslint-disable-next-line
import { removeFromHistoryThunk } from './historyThunks';

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

    return <div className="body">История</div>;
}
