export interface Product {
  id: string;
  name: string;
  description: string;
  details: string;
  image: string;
  price: string;
  availability: string;
  finishes: Array<{
    name: string;
    color: string;
  }>;
}

const products: Product[] = [
  {
    id: "Aluminum",
    name: "Aluminum Windows & Doors",
    description: "Premium quality aluminum windows and doors for modern spaces",
    details: "Our aluminum windows and doors are engineered for durability and style. They feature high-grade aluminum frames, weather-resistant finishes, and superior insulation properties.",
    image: "/allu.jpg",
    price: "Contact for Price",
    availability: "In Stock",
    finishes: [
      { name: "Silver", color: "bg-gray-300" },
      { name: "Black", color: "bg-black" },
      { name: "Bronze", color: "bg-amber-800" }
    ]
  },
  {
    id: "Aluminum Partition",
    name: "Aluminum Partition",
    description: "Elegant aluminum partitions for versatile space management",
    details: "Create flexible and stylish spaces with our aluminum partitions. Perfect for offices, homes, and commercial spaces.",
    image: "/Aluminum Partition.jpeg",
    price: "Contact for Price",
    availability: "Made to Order",
    finishes: [
      { name: "Silver", color: "bg-gray-300" },
      { name: "Black", color: "bg-black" }
    ]
  },
  {
    id: "Wallpaper",
    name: "Designer Wallpaper",
    description: "Transform your walls with our premium wallpaper collection",
    details: "Choose from our extensive collection of designer wallpapers featuring unique patterns, textures, and colors.",
    image: "/wallpaper.jpg",
    price: "Varies by Design",
    availability: "In Stock",
    finishes: [
      { name: "Matte", color: "bg-gray-400" },
      { name: "Glossy", color: "bg-gray-200" }
    ]
  },
  {
    id: "Curtains",
    name: "Luxury Curtains",
    description: "Elegant curtains for sophisticated window treatments",
    details: "Our luxury curtains combine style with functionality, offering light control and privacy with elegant designs.",
    image: "/blinds.jpg",
    price: "Contact for Price",
    availability: "Custom Order",
    finishes: [
      { name: "Fabric", color: "bg-beige-300" },
      { name: "Sheer", color: "bg-white" }
    ]
  },
  {
    id: "Wooden Blinds",
    name: "Wooden Blinds",
    description: "Classic wooden blinds for natural elegance",
    details: "Premium wooden blinds that add warmth and sophistication to any room while providing excellent light control.",
    image: "/woodenblind.jpeg",
    price: "Contact for Price",
    availability: "In Stock",
    finishes: [
      { name: "Natural", color: "bg-amber-700" },
      { name: "Walnut", color: "bg-amber-900" }
    ]
  },
  {
    id: "False Ceiling",
    name: "False Ceiling",
    description: "Modern false ceiling solutions for enhanced aesthetics",
    details: "Create stunning overhead designs with our false ceiling solutions, perfect for both residential and commercial spaces.",
    image: "/Flaseceling.jpeg",
    price: "Custom Quote",
    availability: "Made to Order",
    finishes: [
      { name: "White", color: "bg-white" },
      { name: "Custom", color: "bg-gray-300" }
    ]
  },
  {
    id: "Glass Doors",
    name: "Glass Doors",
    description: "Elegant glass doors for modern interiors",
    details: "Premium glass doors that combine safety with style, perfect for creating bright and open spaces.",
    image: "/glassdoor.jpeg",
    price: "Contact for Price",
    availability: "Custom Order",
    finishes: [
      { name: "Clear", color: "bg-blue-200/30" },
      { name: "Frosted", color: "bg-gray-200/50" }
    ]
  }
];

export const getProducts = () => products;

export const getProductById = (id: string) => {
  // Decode the URL-encoded title and find the matching product
  const decodedId = decodeURIComponent(id);
  return products.find(product => product.id === decodedId);
};
