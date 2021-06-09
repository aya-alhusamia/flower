import img1 from "./image/imagee1.jpeg";
import img2 from "./image/imagee2.jpeg";
import img3 from "./image/imagee3.jpeg";
import img4 from "./image/imagee1b.jpeg";
import img5 from "./image/imagee2b.jpeg";
import img6 from "./image/imagee3b.jpeg";

const products = [
  {
    id: 1,
    name: "Red Roses",
    slug: " Red Roses",
    price: 10,
    description: "this is a Red Roses",
    image: img1,
    image_b: img4,
  },
  {
    id: 2,
    name: "Fiesta Bouquet",
    slug: " Fiesta Bouque",
    price: 9,
    description: "this is a Fiesta Bouquet",
    image: img2,
    image_b: img5,
  },
  {
    id: 3,
    name: "Rosé All Day Bouquet",
    slug: "Rosé All Day Bouquet",
    price: 8,
    description: "this is a Rosé All Day Bouquet",
    image: img3,
    image_b: img6,
  },
];
export default products;
