import { Search } from '../search/Search';

export function MainPage() {
    return (
        <div className="body">
            <div className="main-head">
                <h2>Главная Страница:</h2>
            </div>
            <Search />
        </div>
    );
}
