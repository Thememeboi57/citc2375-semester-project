import { useState, useEffect } from 'react';
import { loadItems } from './api';
import { Routes, Route } from 'react-router';

import Header from './components/Header.jsx';

import Home from './views/Home.jsx';
import About from './views/About.jsx';
import AddItem from './views/AddItem.jsx';

import './App.css';

export default function App() {

    const [items, setItems] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState('');

    const [selectedCategory, setSelectedCategory] =
        useState('All');

    const [favoriteIds, setFavoriteIds] = useState(() => {
        const saved = localStorage.getItem(
            'favoriteFilmIds'
        );

        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        async function getItems() {
            try {
                const data = await loadItems();
                setItems(data);
            
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Something went wrong with loading the films');
            } finally {
                setIsLoading(false);
            }
        }

        getItems();
    }, []);

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
                    isLoading ? (
                        <p>Loading films...</p>
                    ) : error ? (
                        <p className="error-message">
                            {error}
                        </p>
                    ) : (
                        <Home
                            items={filteredItems}
                            favoriteIds={favoriteIds}
                            onToggleFavorite={handleToggleFavorite}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                    )
                }
            />

            <Route
                path="/about"
                element={<About />}
            />

            <Route
                path="/add"
                element={
                    <AddItem onAddItem={handleAddItem} />
                }
            />
        </Routes>
    </>
);
}
