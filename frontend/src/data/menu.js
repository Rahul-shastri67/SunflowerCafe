const u = (id) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;

export const CATEGORIES = [
    { id: "momos", name: "Momos" },
    { id: "noodles", name: "Noodles" },
    { id: "maggi", name: "Maggi" },
    { id: "korean-ramen", name: "Korean Ramen" },
    { id: "italian", name: "Italian" },
    { id: "quick-bites", name: "Quick Bites" },
    { id: "rice", name: "Rice" },
    { id: "desserts", name: "Desserts" },
    { id: "bakery", name: "Bakery" },
    { id: "cold-beverages", name: "Cold Beverages" },
    { id: "hot-beverages", name: "Hot Beverages" },
];

const STEAM_MOMOS = u("1496116218417-1a781b1c416c");
const FRIED_MOMOS = u("1534422298391-e4f8c172dddb");
const PAN_MOMOS = u("1563245372-f21724e3856d");
const GRILLED_SANDWICH = u("1528735602780-2552fd46c7af");
const VEG_SANDWICH = u("1475090169767-40ed8d18f67d");
const SWEET_CORN = u("1551754655-cd27e38d2076");
const MAGGI_PLAIN = u("1617093727343-374698b1b08d");
const PATTIES = u("1601000938259-9e92002320b2");
const COLD_COFFEE = u("1517701604599-bb29b565090c");

export const MENU = {
    momos: [
        { name: "Veg Steam Momos", price: 79, image: STEAM_MOMOS },
        { name: "Veg Fried Momos", price: 99, image: FRIED_MOMOS },
        { name: "Paneer Steam Momos", price: 109, image: STEAM_MOMOS },
        { name: "Paneer Fried Momos", price: 129, image: FRIED_MOMOS },
        { name: "Veg Pan Fried Momos", price: 119, image: PAN_MOMOS },
        { name: "Paneer Pan Fried Momos", price: 139, image: PAN_MOMOS },
        { name: "Jhol Momos", price: 149, image: u("1631515243349-e0cb75fb8d3a") },
    ],
    noodles: [
        { name: "Veg Hakka Noodles", price: 109, image: u("1552611052-33e04de081de") },
        { name: "Chilli Garlic Noodles", price: 129, image: u("1585032226651-759b368d7246") },
        { name: "Schezwan Noodles", price: 139, image: u("1612927601601-6638404737ce") },
        { name: "Thecha Chowmein", price: 149, image: u("1598866594230-a7c12756260f") },
    ],
    maggi: [
        { name: "Plain Maggi", price: 59, image: MAGGI_PLAIN },
        { name: "Butter Maggi", price: 69, image: MAGGI_PLAIN },
        { name: "Masala Maggi", price: 69, image: MAGGI_PLAIN },
        { name: "Veg Masala Maggi", price: 89, image: u("1612929633738-8fe44f7ec841") },
        { name: "Cheese Maggi", price: 109, image: u("1611270629569-8b357cb88da9") },
    ],
    "korean-ramen": [
        { name: "Classic", price: 149, image: u("1591814468924-caf88d1232e1") },
        { name: "Spicy", price: 169, image: u("1580651315530-69c8e0026377") },
        { name: "Cheese", price: 189, image: u("1590301157890-4810ed352733") },
        { name: "Veg", price: 179, image: u("1569718212165-3a8278d5f624") },
    ],
    italian: [
        { name: "White Sauce Pasta", price: 149, image: u("1621996346565-e3dbc646d9a9") },
        { name: "Red Sauce Pasta", price: 139, image: u("1563379926898-05f4575a45d8") },
        { name: "Pink Sauce Pasta", price: 159, image: u("1473093295043-cdd812d0e601") },
    ],
    "quick-bites": [
        { name: "Veg Club Sandwich", price: 109, image: u("1550507992-eb63ffee0847") },
        { name: "Grilled Sandwich", price: 90, image: GRILLED_SANDWICH },
        { name: "Veg Sandwich", price: 90, image: VEG_SANDWICH },
        { name: "Cheese Corn Sandwich", price: 129, image: GRILLED_SANDWICH },
        { name: "Sweet Corn", price: 79, image: SWEET_CORN },
        { name: "Masala Sweet Corn", price: 99, image: SWEET_CORN },
        { name: "Nachos with Cheese Dip", price: 149, image: u("1513456852971-30c0b8199d4d") },
    ],
    rice: [{ name: "Veg Fried Rice", price: 90, image: u("1603133872878-684f208fb84b") }],
    desserts: [
        { name: "Croissant", price: 99, image: u("1555507036-ab1f4038808a") },
        { name: "Cheesecake", price: 179, image: u("1533134242443-d4fd215305ad") },
        { name: "Cupcake", price: 69, image: u("1486427944299-d1955d23e34d") },
        { name: "Donut", price: 79, image: u("1551024601-bec78aea704b") },
        { name: "Cookies", price: 49, image: u("1499636136210-6f4ee915583e") },
        { name: "Bomboloni", price: 129, image: u("1603532648955-039310d9ed75") },
    ],
    bakery: [
        { name: "Paneer Patties", price: 50, image: PATTIES },
        { name: "Aloo Patties", price: 40, image: PATTIES },
        { name: "Bread Pizza", price: 119, image: u("1565299624946-b28f40a0ae38") },
    ],
    "cold-beverages": [
        { name: "Classic Cold Coffee", price: 90, image: COLD_COFFEE },
        { name: "Vanilla Cold Coffee", price: 110, image: u("1553909489-cd47e0907980") },
        { name: "Hazelnut Cold Coffee", price: 120, image: u("1497636577773-f1231844b336") },
        { name: "Butterscotch Cold Coffee", price: 120, image: COLD_COFFEE },
        { name: "Chocolate Cold Coffee", price: 120, image: u("1578314675249-a6910f80cc4e") },
        { name: "Virgin Mojito", price: 99, image: u("1551538827-9c037cb4f32a") },
    ],
    "hot-beverages": [
        { name: "Lemon Honey Tea", price: 59, image: u("1576092768241-dec231879fc3") },
        { name: "Lemon Tea", price: 49, image: u("1544145945-f90425340c7e") },
        { name: "Masala Tea", price: 39, image: u("1571934811356-5cc061b6821f") },
        { name: "Coffee", price: 59, image: u("1509042239860-f550ce710b93") },
        { name: "Hot Chocolate", price: 129, image: u("1517578239113-b03992dcdd25") },
    ],
};

export const CAFE = {
    name: "Sunflower Cafe",
    tagline: "Fresh • Homemade • Pure Vegetarian",
    address: "Near Sawalde Bridge, Dhela Road, Ramnagar, Uttarakhand – 244715",
    phones: ["+91 9259128558 ", "• +91 6397228331"],
    email: "SunflowerCafe.19@gmail.com",
    hours: "Everyday · 10:00 AM – 9:00 PM",
    instagram: "https://www.instagram.com/its_sunflowercafe?igsh=ZTd2Z21tcTd4Nzlp",
    mapEmbed:
        "https://www.google.com/maps?q=Sunflower+Cafe,+Dhela+Road,+Ramnagar,+Uttarakhand+244715&output=embed",
};
