//TODO: add and export the data model for your list of filters
/* Notice how we've changed the data model for filters
to make managing the state of the selected filters and the
conditional rendering of our hotels easier. */
export var filterOptions = [
    { display: "Free Cancellation", key: "hasFreeCancellation" },
    { display: "Breakfast Included", key: "includesBreakfast" },
    { display: "Bestsellers", key: "isBestSeller" },
    { display: "Parking", key: "hasParking" },
    { display: "Pets Allowed", key: "allowsPets" },
    { display: "Room Service", key: "hasRoomService" },
    { display: "Fitness Centre", key: "hasFitnessCenter" },
    { display: "Swimming Pool", key: "swimmingPool" },
    { display: "Dining Area", key: "diningArea" }

];


export var hotels = [
    {
        id: 123,
        name: "Holiday Inn Express",
        rating: 8.3,
        reviewCount: 2393,
        pricePerNight: 308.34,
        imageSrc:
            "https://ihg.scene7.com/is/image/ihg/holiday-inn-the-colony-4629618286-4x3",
        roomsRemaining: 9,
        hasFreeCancellation: true,
        includesBreakfast: true,
        isBestSeller: false,
        hasParking: false,
        allowsPets: false,
        hasRoomService: false,
        hasFitnessCenter: false,
        swimmingPool: true,
        diningArea: false
    },
    {
        id: 124,
        name: "Hotel Pennsylvania",
        rating: 5.6,
        reviewCount: 40642,
        pricePerNight: 240.0,
        imageSrc:
            "https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/hotel-galvez-and-spa/media/hg-home-header-mobile-01-1-5d323bfd9ee62.jpg",
        roomsRemaining: 22,
        hasFreeCancellation: false,
        includesBreakfast: true,
        isBestSeller: true,
        hasParking: true,
        allowsPets: false,
        hasRoomService: true,
        hasFitnessCenter: true,
        swimmingPool: false,
        diningArea: false
    },
    {
        id: 125,
        name: "RIU Plaza New York Times Square",
        rating: 8.7,
        reviewCount: 5301,
        pricePerNight: 314,
        imageSrc:
            "https://q-ak.bstatic.com/xdata/images/hotel/square600/178773353.webp?k=9bd0190ff5a25ce00dac63185dbcb92565380b03e40711f2a243c33cff6ffd87&o=",
        roomsRemaining: 2,
        hasFreeCancellation: false,
        includesBreakfast: false,
        isBestSeller: true,
        hasParking: true,
        allowsPets: false,
        hasRoomService: false,
        hasFitnessCenter: true,
        swimmingPool: true,
        diningArea: true
    },
    {
        id: 126,
        name: "Dream Downtown",
        rating: 7.7,
        reviewCount: 1519,
        pricePerNight: 427,
        imageSrc:
            "https://q-ak.bstatic.com/xdata/images/hotel/square600/43860055.webp?k=5cb29412068e05723ee6b1c204685c6d3a8fab1c625f741fdc559ee67236674c&o=",
        roomsRemaining: 14,
        hasFreeCancellation: true,
        includesBreakfast: false,
        isBestSeller: false,
        hasParking: false,
        allowsPets: true,
        hasRoomService: false,
        hasFitnessCenter: true,
        swimmingPool: true,
        diningArea: true
    },
    {
        id: 127,
        name: "Aliz Hotel Times Square",
        rating: 8.5,
        reviewCount: 1271,
        pricePerNight: 289,
        imageSrc:
            "https://r-ak.bstatic.com/xdata/images/hotel/square600/165926262.webp?k=2a08ad467a809bf1a8ebd2f1e2013b6c9693575b9a4cafc9a8cf8d4ee857c398&o=",
        roomsRemaining: 8,
        hasFreeCancellation: true,
        includesBreakfast: false,
        isBestSeller: false,
        hasParking: true,
        allowsPets: false,
        hasRoomService: true,
        hasFitnessCenter: false,
        swimmingPool: false,
        diningArea: true
    }
];

