import ItemList from '../components/ItemList.jsx';
export default function Home({
    items,
    favoriteIds,
    onToggleFavorite,
    selectedCategory,
    setSelectedCategory,
}) {
    return (
        <main>
            <h1>My Film Reviews</h1>

            <h2>Film Reviews</h2>

            <p>Welcome to my film reviews page! Here you can find my thoughts and opinions on various films.</p>
            <div className="filter-container">
                <label htmlFor="category-filter">Filter by category</label>
                <select
                    id="category-filter"
                    value={selectedCategory}
                    onChange={event =>
                        setSelectedCategory(event.target.value)
                    }
                >
                    <option value="All">All</option>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Science Fiction">Science Fiction</option>
                </select>
            </div>

            <ItemList
                items={items}
                favoriteIds={favoriteIds}
                onToggleFavorite={onToggleFavorite}
            />
        </main>
    );
}