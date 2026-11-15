import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';

import Header from './components/Header.jsx';

import Home from './views/Home.jsx';
import About from './views/About.jsx';
import AddItem from './views/AddItem.jsx';

import { items as initialItems } from './data.js';

import './App.css';

export default function App() {

    const [items, setItems] = useState(initialItems);

    const [selectedCategory, setSelectedCategory] =
        useState('All');

    const [favoriteIds, setFavoriteIds] = useState(() => {
        const saved = localStorage.getItem(
            'favoriteFilmIds'
        );

        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem(
            'favoriteFilmIds',
            JSON.stringify(favoriteIds)
        );
    }, [favoriteIds]);

    function handleToggleFavorite(itemId) {
        const updated = favoriteIds.includes(itemId)
            ? favoriteIds.filter(id => id !== itemId)
            : [...favoriteIds, itemId];

        setFavoriteIds(updated);
    }

    function handleAddItem(newItem) {
        setItems(currentItems => [...currentItems, newItem]);
    }

    const filteredItems =
        selectedCategory === 'All'
            ? items
            : items.filter(
                item => item.category === selectedCategory
            );

    return (
        <>
            <Header />

            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            items={filteredItems}
                            favoriteIds={favoriteIds}
                            onToggleFavorite={handleToggleFavorite}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                    }
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/add"
                    element={<AddItem onAddItem={handleAddItem} />}
                />
            </Routes>
        </>
    );
}
