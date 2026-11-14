export default function ItemCard({
    item,
    isFavorite,
    onToggleFavorite
}) {
    return (
        <article className="item-card">
            {item.image && (
                <img
                    src={item.image}
                    alt={`Poster for ${item.title}`}
                />
            )}

            <h2>{item.title}</h2>

            <p>
                <strong>Category:</strong> {item.category}
            </p>

            <p>{item.description}</p>

            <p>
                <strong>Rating:</strong> {item.rating}/5
            </p>

            <p>
                <strong>Release Year:</strong> {item.year}
            </p>
            
            <button
            type="button"
            aria-pressed={isFavorite}
            onClick={() => onToggleFavorite(item.id)}
            >
                {isFavorite ? "Unfavorite" : "Favorite"}
            </button>
        </article>
    )
}