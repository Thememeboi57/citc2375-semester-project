const itemList = document.querySelector("#item-list");
const categoryFilter = document.querySelector("#category-filter");
let favoriteIds = JSON.parse(localStorage.getItem("favoriteFilmIds")) || [];
items.forEach(function (item) {
    item.favorite = favoriteIds.includes(item.id);
})
function renderItems(itemsToRender) {
    itemList.replaceChildren();
    itemsToRender.forEach(function (item) {
        const article = document.createElement("article");
        article.classList.add("item-card");

        const title = document.createElement("h3");
        title.textContent = item.title;

        const category = document.createElement("p");
        category.textContent = "Category: " + item.category;

        const description = document.createElement("p");
        description.textContent = item.description;

        const rating = document.createElement("p");
        rating.textContent = "Rating: " + item.rating;

        const year = document.createElement("p");
        year.textContent = "Release Year: " + item.year;

        const favoriteButton = document.createElement("button");
        favoriteButton.textContent = item.favorite ? "Unfavorite" : "Favorite";
        favoriteButton.setAttribute("aria-pressed", item.favorite.toString());
        favoriteButton.addEventListener("click", function () {
            toggleFavorite(item.id, favoriteButton);
        });
        article.appendChild(title);
        article.appendChild(category);
        article.appendChild(description);
        article.appendChild(rating);
        article.appendChild(year);
        article.appendChild(favoriteButton);
        itemList.appendChild(article);
    });
    if (itemsToRender.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No items to display.";
        itemList.appendChild(message);
    }
}
function toggleFavorite(id, button) {
    const item = getItemById(id);
    if (!item) {
        return;
    }
    item.favorite = !item.favorite;
    if (item.favorite) {
        favoriteIds.push(id);
    } else {
        favoriteIds = favoriteIds.filter(function (favoriteId) {
            return favoriteId !== id;
        });
    }
    localStorage.setItem("favoriteFilmIds", JSON.stringify(favoriteIds));
    button.textContent = item.favorite ? "Unfavorite" : "Favorite";
    button.setAttribute("aria-pressed", item.favorite.toString());
}
function applyFilter() {
    const selectedCategory = categoryFilter.value;

    if (selectedCategory === "All") {
        renderItems(items);
    } else {
        const filteredItems = getItemsByCategory(selectedCategory);
        renderItems(filteredItems);
    }
}
categoryFilter.addEventListener("change", applyFilter);

renderItems(items);
const projectTitle = "My Film Reviews";
const currentSampleItems = items.length;
const averageRating = getAverageRating();
const reviewsEnabled = true;

const plannedCollectionSize = 30;

const collectionPercentage = (currentSampleItems / plannedCollectionSize) * 100;

const summary = `${projectTitle} currently contains ${currentSampleItems} sample films.`;

let collectionStatus;

if (currentSampleItems >= 3) {
    collectionStatus = "The collection is sufficient for analysis.";
} else {
    collectionStatus = "The collection is insufficient for analysis.";
}
console.log("Project Summary: ", summary);
console.log("Collection Percentage:", collectionPercentage + "%");
console.log("Collection Status: ", collectionStatus);
console.log("Average film rating: ", averageRating.toFixed(2));
console.log("Film with ID 1: ", getItemById(1));
console.log("Animation films: ", getItemsByCategory("Animation"));