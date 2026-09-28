const projectTitle = "My Film Reviews";
const currentSampleItems = 3;
const averageRating = 4.5;
const reviewsEnabled = true;

const plannedCollectionSize = 20;

const collectionPercentage = (currentSampleItems / plannedCollectionSize) * 100;

const summary = '${projectTitle} currently contains ${currentSampleItems} sample films';

let collectionStatus;

if (currentSampleItems >= 3) {
    collectionStatus = "Sufficient";
} else {
    collectionStatus = "Insufficient";
}
console.log("Project Summary: ", summary);
console.log("Collection Percentage:", collectionPercentage + "%");
console.log("Collection Status: ", collectionStatus);