import { useSelector } from 'react-redux';
import { FavoritesColumn } from './FavoritesColumn';

export function Favorites() {
    const { films, people, planets } = useSelector(
        (state) => state.auth.favorites
    );

    return (
        <div className="body">
            <div className="favorites-container">
                <div className="main-head">
                    <h1>Избранное</h1>
                </div>
                <div className="favorites-body">
                    {films.length > 0 && (
                        <FavoritesColumn
                            key="films"
                            list={films}
                            type="films"
                        />
                    )}
                    {people.length > 0 && (
                        <FavoritesColumn
                            key="people"
                            list={people}
                            type="people"
                        />
                    )}
                    {planets.length > 0 && (
                        <FavoritesColumn
                            key="planets"
                            list={planets}
                            type="planets"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
