export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  availability: "In Stock" | "Out of Stock";
  finishes: Array<{
    name: string;
    color: string;
  }>;
  details: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "aluminum-sliding-window",
    name: "Aluminum Sliding Window",
    description: "Premium sliding window with smooth operation and durability.",
    image: "/products/sliding-window.jpg",
    price: "Contact for Price",
    availability: "In Stock",
    finishes: [
      { name: "Brushed Aluminum", color: "bg-gray-400" },
      { name: "Silver", color: "bg-silver-500" },
      { name: "Matte Black", color: "bg-gray-900" },
      { name: "Gold", color: "bg-gold-500" },
    ],
    details: "Our aluminum sliding windows offer exceptional quality...",
    category: "Windows",
  },
  {
    id: "aluminum-door",
    name: "Aluminum Door",
    description: "High-quality aluminum door for modern homes.",
    image: "/products/door.jpg",
    price: "Contact for Price",
    availability: "In Stock",
    finishes: [
      { name: "Brushed Aluminum", color: "bg-gray-400" },
      { name: "Silver", color: "bg-silver-500" },
      { name: "Matte Black", color: "bg-gray-900" },
    ],
    details: "Premium aluminum doors designed for durability...",
    category: "Doors",
  },
  // Add more products as needed
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
