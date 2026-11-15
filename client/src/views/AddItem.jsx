import { useState } from 'react';
export default function AddItem({ onAddItem }) {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [rating, setRating] = useState('');
    const [image, setImage] = useState('');
    

    function handleSubmit(event) {
        event.preventDefault();
        
        const newItem = {
            id: Date.now(),
            title: title,
            category: category,
            description: description,
            releaseYear: releaseYear,
            rating: rating,
            image: image,
            favorite: false,
        };

        onAddItem(newItem);
        setTitle('');
        setCategory('');
        setDescription('');
        setReleaseYear('');
        setRating('');
        setImage('');
        
        alert('Film added successfully!');
    }

    return (
        <main>
            <h1>Add Film</h1>
            
            <p>Use this form to add a new film review to my collection.</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    required
                />

                <label htmlFor="category">Category</label>
                <select
                    id="category"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                    required
                >
                    <option value="">Select a category</option>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Science Fiction">Science Fiction</option>
                </select>

                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                    required
                />

                <label htmlFor="releaseYear">Release Year</label>
                <input
                    id="releaseYear"
                    type="number"
                    min="1900"
                    max="2026"
                    value={releaseYear}
                    onChange={event => setReleaseYear(event.target.value)}
                    required
                />

                <label htmlFor="rating">Rating</label>
                <input
                    id="rating"
                    type="number"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={event => setRating(event.target.value)}
                    required
                />

                <label htmlFor="image">Image URL:</label>
                <input
                    id="image"
                    type="url"
                    value={image}
                    onChange={event => setImage(event.target.value)}
                    required
                />

                <button type="submit">Add Film</button>
            </form>
        </main>
    );
}