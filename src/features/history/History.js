import { useSelector } from 'react-redux';
import { HistoryColumn } from './HistoryColumn';

export function History() {
    const { films, people, planets } = useSelector(
        (state) => state.auth.history
    );

    return (
        <div className="body">
            <div className="history-container">
                <div className="main-head">
                    <h1>История поиска</h1>
                </div>
                <div className="history-body">
                    {films.length > 0 && (
                        <HistoryColumn key="films" list={films} type="films" />
                    )}
                    {people.length > 0 && (
                        <HistoryColumn
                            key="people"
                            list={people}
                            type="people"
                        />
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
        </div>
    );
}
