import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Book", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Flex-Banner.jpg", description: "Description for product one.", price: 29.99 },
  { id: 2, name: "Flex Benner", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Mug.jpg", description: "Description for product one.", price: 29.99 },
  { id: 3, name: "Carry Bag", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Carry-Bag.jpg", description: "Description for product one.", price: 29.99 },
  { id: 4, name: "Envelope", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Envelope.jpg", description: "Description for product one.", price: 29.99 },
  { id: 5, name: "Business Card", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Business-Card.jpg", description: "Description for product one.", price: 29.99 },
  { id: 6, name: "Letterhead", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Letterhead.jpg", description: "Description for product one.", price: 29.99 },
  { id: 7, name: "Mug", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Mug.jpg", description: "Description for product one.", price: 29.99 },
  { id: 8, name: "Business Card", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Business-Card.jpg", description: "Description for product one.", price: 29.99 },
  { id: 9, name: "Book", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Flex-Banner.jpg", description: "Description for product one.", price: 29.99 },
  { id: 10, name: "Flex Benner", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Mug.jpg", description: "Description for product one.", price: 29.99 },
  { id: 11, name: "Carry Bag", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Carry-Bag.jpg", description: "Description for product one.", price: 29.99 },
  { id: 12, name: "Envelope", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Envelope.jpg", description: "Description for product one.", price: 29.99 },
  { id: 13, name: "Business Card", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Business-Card.jpg", description: "Description for product one.", price: 29.99 },
  { id: 14, name: "Letterhead", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Letterhead.jpg", description: "Description for product one.", price: 29.99 },  

  { id: 15, name: "Mug", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Mug.jpg", description: "Description for product one.", price: 29.99 },
  { id: 16, name: "Business Card", image: "https://akhilgraphics.in/wp-content/uploads/2021/11/Business-Card.jpg", description: "Description for product one.", price: 29.99 },

];

export default function FeatureProducts() {
  return (
    <div className="p-8 w-full space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6">Featured Products</h1>

      <div className="flex flex-wrap justify-center py-8 gap-6">
        {products.map((product) => (
          <div key={product.id} className="w-[250px] h-[350px] shadow border-amber-600 rounded-md overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-200">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4 py-4">
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <p className="text-sm text-gray-500">{product.description}</p>
            </div>
              <Link to={`/product`} className="p-6">
              <button className="w-[80%] py-2 rounded-xl border border-gray-300 text-gray-500 shadow-xl hover:bg-orange-400 hover:text-white transition">
                Add to Card
              </button>
              </Link>

          </div>
        ))}
      </div>
    </div>
  );
}
