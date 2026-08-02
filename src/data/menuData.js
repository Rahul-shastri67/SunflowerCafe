// Sunflower Cafe — menu data
// Source of truth: Sunflower_Cafe_Final_Menu.pdf
// Category names, item names and prices are copied exactly — never invent, remove, rename or reprice.
//
// `image` is a curated, real (non-AI-generated) vegetarian food photograph.
// Where no confidently-accurate photo could be sourced, `image` is left null
// and the MenuCard component renders a clean illustrated placeholder instead
// of risking an incorrect photo (per project brief).

const u = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

export const CATEGORIES = [
  {
    id: "momos",
    label: "Momos",
    items: [
      { id: "veg-steam-momos", name: "Veg Steam Momos", price: 79, image: u("photo-1694923450868-b432a8ee52aa") },
      { id: "veg-fried-momos", name: "Veg Fried Momos", price: 99, image: u("photo-1646470624234-3f3cb1e7694d") },
      { id: "paneer-steam-momos", name: "Paneer Steam Momos", price: 109, image: u("photo-1647999019630-dabe1a837693") },
      { id: "paneer-fried-momos", name: "Paneer Fried Momos", price: 129, image: u("photo-1661082568383-d31c9a87061f") },
      { id: "veg-pan-fried-momos", name: "Veg Pan Fried Momos", price: 119, image: u("photo-1687068328974-13261a846e58") },
      { id: "paneer-pan-fried-momos", name: "Paneer Pan Fried Momos", price: 139, image: u("photo-1687068283776-fd69669beab8") },
      { id: "jhol-momos", name: "Jhol Momos", price: 149, image: u("photo-1650977399594-504c2aa27b3b") },
    ],
  },
  {
    id: "noodles",
    label: "Noodles",
    items: [
      { id: "veg-hakka-noodles", name: "Veg Hakka Noodles", price: 109, image: u("photo-1555126634-323283e090fa") },
      { id: "chilli-garlic-noodles", name: "Chilli Garlic Noodles", price: 129, image: u("photo-1565976469791-9cbef1241c1f") },
      { id: "schezwan-noodles", name: "Schezwan Noodles", price: 139, image: u("photo-1631709497146-a239ef373cf1") },
      { id: "thecha-chowmein", name: "Thecha Chowmein", price: 149, image: u("photo-1565976469782-7c92daebc42e") },
    ],
  },
  {
    id: "maggi",
    label: "Maggi",
    items: [
      { id: "plain-maggi", name: "Plain Maggi", price: 59, image: u("photo-1553909489-2542a1068437") },
      { id: "butter-maggi", name: "Butter Maggi", price: 69, image: u("photo-1615444814488-f0b1952b2f27") },
      { id: "masala-maggi", name: "Masala Maggi", price: 69, image: u("photo-1612927601601-6638404737ce") },
      { id: "veg-masala-maggi", name: "Veg Masala Maggi", price: 89, image: u("photo-1645530657515-c4051284f2dc") },
      { id: "cheese-maggi", name: "Cheese Maggi", price: 109, image: u("photo-1634818114215-fb2df804cdff") },
    ],
  },
  {
    id: "korean-ramen",
    label: "Korean Ramen",
    items: [
      { id: "ramen-classic", name: "Classic", price: 149, image: u("photo-1750602920132-2146f0345e21") },
      { id: "ramen-spicy", name: "Spicy", price: 169, image: null },
      { id: "ramen-cheese", name: "Cheese", price: 189, image: null },
      { id: "ramen-veg", name: "Veg", price: 179, image: null },
    ],
  },
  {
    id: "italian",
    label: "Italian",
    items: [
      { id: "white-sauce-pasta", name: "White Sauce Pasta", price: 149, image: u("photo-1622713142003-3c1e675e5748") },
      { id: "red-sauce-pasta", name: "Red Sauce Pasta", price: 139, image: u("photo-1553621043-f607bfbf6640") },
      { id: "pink-sauce-pasta", name: "Pink Sauce Pasta", price: 159, image: u("photo-1600490036275-35f5f1656861") },
    ],
  },
  {
    id: "quick-bites",
    label: "Quick Bites",
    items: [
      { id: "veg-club-sandwich", name: "Veg Club Sandwich", price: 109, image: u("photo-1540713434306-58505cf1b6fc") },
      { id: "grilled-sandwich", name: "Grilled Sandwich", price: 90, image: u("photo-1528736235302-52922df5c122") },
      { id: "veg-sandwich", name: "Veg Sandwich", price: 90, image: u("photo-1496113269490-84ffe1a410cb") },
      { id: "cheese-corn-sandwich", name: "Cheese Corn Sandwich", price: 129, image: u("photo-1595436252086-7496fb8c41e9") },
      { id: "sweet-corn", name: "Sweet Corn", price: 79, image: null },
      { id: "masala-sweet-corn", name: "Masala Sweet Corn", price: 99, image: null },
      { id: "nachos-cheese-dip", name: "Nachos with Cheese Dip", price: 149, image: null },
    ],
  },
  {
    id: "rice",
    label: "Rice",
    items: [
      { id: "veg-fried-rice", name: "Veg Fried Rice", price: 90, image: u("photo-1591814468924-caf88d1232e1") },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { id: "croissant", name: "Croissant", price: 99, image: u("photo-1623334044303-241021148842") },
      { id: "cheesecake", name: "Cheesecake", price: 179, image: u("photo-1588195538326-c5b1e9f80a1b") },
      { id: "cupcake", name: "Cupcake", price: 69, image: u("photo-1614707267537-b85aaf00c4b7") },
      { id: "donut", name: "Donut", price: 79, image: u("photo-1551024601-bec78aea704b") },
      { id: "cookies", name: "Cookies", price: 49, image: u("photo-1563805042-7684c019e1cb") },
      { id: "bomboloni", name: "Bomboloni", price: 129, image: u("photo-1495147466023-ac5c588e2e94") },
    ],
  },
  {
    id: "bakery",
    label: "Bakery",
    items: [
      { id: "paneer-patties", name: "Paneer Patties", price: 50, image: null },
      { id: "aloo-patties", name: "Aloo Patties", price: 40, image: null },
      { id: "bread-pizza", name: "Bread Pizza", price: 119, image: null },
    ],
  },
  {
    id: "cold-beverages",
    label: "Cold Beverages",
    items: [
      { id: "classic-cold-coffee", name: "Classic Cold Coffee", price: 90, image: u("photo-1530373239216-42518e6b4063") },
      { id: "vanilla-cold-coffee", name: "Vanilla Cold Coffee", price: 110, image: u("photo-1527156231393-7023794f363c") },
      { id: "hazelnut-cold-coffee", name: "Hazelnut Cold Coffee", price: 120, image: u("photo-1517701550927-30cf4ba1dba5") },
      { id: "butterscotch-cold-coffee", name: "Butterscotch Cold Coffee", price: 120, image: u("photo-1461023058943-07fcbe16d735") },
      { id: "chocolate-cold-coffee", name: "Chocolate Cold Coffee", price: 120, image: u("photo-1625126625120-11f3de454f5a") },
      { id: "virgin-mojito", name: "Virgin Mojito", price: 99, image: u("photo-1642647391072-6a2416f048e5") },
    ],
  },
  {
    id: "hot-beverages",
    label: "Hot Beverages",
    items: [
      { id: "lemon-honey-tea", name: "Lemon Honey Tea", price: 59, image: null },
      { id: "lemon-tea", name: "Lemon Tea", price: 49, image: null },
      { id: "masala-tea", name: "Masala Tea", price: 39, image: u("photo-1625242662341-5e92c5101338") },
      { id: "hot-coffee", name: "Coffee", price: 59, image: u("photo-1530629159325-9c378fc150b9") },
      { id: "hot-chocolate", name: "Hot Chocolate", price: 129, image: null },
    ],
  },
];

export const CAFE = {
  name: "Sunflower Cafe",
  tagline: "Fresh · Homemade · Pure Vegetarian",
  location: "Ramnagar, Uttarakhand",
  badge: "Since the hills",
  address: "Near Sawalde Bridge, Dhela Road, Ramnagar, Uttarakhand – 244715",
  phones: ["+91 9259128558", "+91 6397228331"],
  email: "SunflowerCafe.19@gmail.com",
  hours: "Everyday · 10:00 AM – 9:00 PM",
  instagram: "@sneh.for.you",
  instagramUrl: "https://www.instagram.com/sneh.for.you",
  mapsQuery: "Sunflower Cafe, Near Sawalde Bridge, Dhela Road, Ramnagar, Uttarakhand 244715",
};
