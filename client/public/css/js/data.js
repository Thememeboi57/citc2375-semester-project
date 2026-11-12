const items = [
    {
        id: 1,
        title: "Princess Mononoke",
        category: "Animation",
        description: "A young warrior becomes involved in the struggle between forest gods and humans who consume the forest's resources.",
        rating: 5,
        favorite: true,
        year: 1997
    },
    {
        id: 2,
        title: "The End of Evangelion",
        category: "Animation",
        description: "A surreal and apocalyptic conclusion to the Neon Genesis Evangelion series, exploring themes of identity and human connection.",
        rating: 4.5,
        favorite: true,
        year: 1997
    },
    {
        id: 3,
        title: "Magnolia",
        category: "Drama",
        description: "A mosaic of interrelated characters in Los Angeles, exploring themes of coincidence, forgiveness, and the human condition.",
        rating: 4,
        favorite: false,
        year: 1999
    },
    {
        id: 4,
        title: "Backrooms",
        category: "Horror",
        description: "A psychological horror film that delves into the unsettling concept of liminal spaces and the fear of the unknown.",
        rating: 3.5,
        favorite: false,
        year: 2026
    },
    {
        id: 5,
        title: "Attack On Titan",
        category: "Action",
        description: "In a world where humanity is on the brink of extinction due to giant humanoid creatures known as Titans, a group of young soldiers fights to protect their civilization and uncover the truth behind the Titans' existence.",
        rating: 4.5,
        favorite: true,
        year: 2013
    },
    {
        id: 6,
        title: "Close Encounters of the Third Kind",
        category: "Science Fiction",
        description: "A classic sci-fi film that follows a man who experiences a close encounter with extraterrestrial beings and becomes obsessed with uncovering the truth.",
        rating: 4,
        favorite: false,
        year: 1977
    }
];
function getItemById(id) {
    return items.find(function(item) {
        return item.id === id;
    });
}
function getItemsByCategory(category) {
    return items.filter(function(item) {
        return item.category === category;
    });
}
function getAverageRating() {
    const totalRating = items.reduce(function(total, item) {
        return total + item.rating;
    }, 0);
    return totalRating / items.length;
}
const itemsJSON = JSON.stringify(items);
const parsedItems = JSON.parse(itemsJSON);

console.log("JSON round-trip test:", parsedItems[0].title);