import { useState } from "react";

import Header from "./components/Header.jsx";
import ItemList from "./components/ItemList.jsx";

import { items } from "./data.js";

import "./App.css";

export default function App() {

    // Remember the selected category
    const [selectedCategory, setSelectedCategory] = useState(
        function () {
            return localStorage.getItem(
                "myFilmReviews.selectedCategory"
            ) || "All";
        }
    );

    // Load saved favorite IDs
    const [favoriteIds, setFavoriteIds] = useState(
        function () {
            const saved = localStorage.getItem("favoriteFilmIds");

            if (saved !== null) {
                return JSON.parse(saved);
            }

            return items
                .filter(function (item) {
                    return item.favorite;
                })
                .map(function (item) {
                    return item.id;
                });
        }
    );

    // Handle category changes
    function handleCategoryChange(event) {

        const category = event.target.value;

        setSelectedCategory(category);

        localStorage.setItem(
            "myFilmReviews.selectedCategory",
            category
        );
    }

    // Handle favorite button clicks
    function handleToggleFavorite(itemId) {

        const updatedFavorites = favoriteIds.includes(itemId)
            ? favoriteIds.filter(function (id) {
                return id !== itemId;
            })
            : [...favoriteIds, itemId];

        setFavoriteIds(updatedFavorites);

        localStorage.setItem(
            "favoriteFilmIds",
            JSON.stringify(updatedFavorites)
        );
    }

    // Get unique categories from the collection
    const categories = [
        ...new Set(items.map(function (item) {
            return item.category;
        }))
    ];

    // Filter the collection
    const filteredItems = selectedCategory === "All"
        ? items
        : items.filter(function (item) {
            return item.category === selectedCategory;
        });

    return (
        <>
            <Header />

            <main className="content-width">

                <h1>My Film Reviews</h1>

                <section>
                    <h2>Film Reviews</h2>

                    <p>
                        Here are some of my favorite films
                        and my reviews of them.
                    </p>

                    <div className="filter-container">

                        <label htmlFor="category-filter">
                            Filter by category:
                        </label>

                        <select
                            id="category-filter"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                        >
                            <option value="All">
                                All Categories
                            </option>

                            {categories.map(function (category) {
                                return (
                                    <option
                                        key={category}
                                        value={category}
                                    >
                                        {category}
                                    </option>
                                );
                            })}

                        </select>

                    </div>

                    <ItemList
                        items={filteredItems}
                        favoriteIds={favoriteIds}
                        onToggleFavorite={handleToggleFavorite}
                    />

                </section>

            </main>

            <footer>
                <div className="content-width">
                    <p>
                        &copy; 2026 My Film Reviews.
                        All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
}
