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