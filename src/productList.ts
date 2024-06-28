import image1 from "./assets/image-1.png";
import image2 from "./assets/image-2.png";
import image3 from "./assets/image-3.png";
import image4 from "./assets/image-4.png";

type ProductList = [
  {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
    detail: number | string | null;
  }
];
export const ProductList = [
  {
    id: 1,
    image: image1,
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: 3500000,
    detail: 30,
  },
  {
    id: 2,
    image: image2,
    title: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    detail: null,
  },
  {
    id: 3,
    image: image3,
    title: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    detail: 50,
  },
  {
    id: 4,
    image: image4,
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    detail: "New",
  },
];
