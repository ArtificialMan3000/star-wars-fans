import { useSelector } from 'react-redux';

export function Favorites() {
    // const dispatch = useDispatch();

    const favorites = useSelector((state) => state.auth.favorites);
    console.log(favorites);

    return (
        <div className="body">
            <h3>Избранное</h3>
        </div>
    );
}
