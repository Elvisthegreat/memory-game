let errors = 0;

let images = [
    "assets/images/back.jpg",
    "assets/images/majestic-arctic-mammal-standing-frozen-ice-floe-generated-by-ai_188544-23080.webp",
    "assets/images/mountain-bike-rider-top-mountain-high-quality-photo_1001743-18799.webp",
    "assets/images/one-person-hiking-mountain-peak-admiring-milky-way-galaxy-generated-by-ai_24640-93611.webp",
    "assets/images/ai-generated-chicken-picture_23-2150653961.webp",
    "assets/images/cyberpunk-urban-scenery_23-2150712616.webp",
    "assets/images/dubai-city-landscape_1409-6484.webp",
    "assets/images/dubai-skyline-wallpaper_1409-6486.webp",
    "assets/images/eskimo-people-living-extreme-weather-condition_23-2151036437.webp",
    "assets/images/fashion-model-bold-orange-hat-sunglasses-with-blue-makeup_100209-6467.webp",
    "assets/images/happy-children-s-sitting-inside-school-bus_220873-45893.webp",
    "assets/images/magical-lights-forest-christmas-night-winter-landscape-with-showy-country-road-trees-starry-sky-scenery-woods-snow-background-theme-new-year-holiday-nature-generative-ai_788189-12122.webp"
];

let cardSet;
let borad = [];

windown.onload = function(){
    shuffleCards();
    startGame();
}
// Duplicate the images array to have pairs of each image

 