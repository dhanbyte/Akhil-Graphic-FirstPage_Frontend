import { Link } from "react-router-dom";
import AnimatedWrapper from "../components/AnimatedWrapper";

type Product = {
  id: number;
  name: string;
  image: string;
  price?: number;
  description?: string;
};

export default function FeatureProducts({ products }: { products: Product[] }) {
  return (
    <div className="p-4 md:p-8 w-full space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6">
        Featured Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products
          .filter((product) => product.id >= 1 && product.id <= 20)
          .map((product) => (
            <AnimatedWrapper key={product.id} from="bottom">
              <div className="w-full max-w-[250px] h-auto md:h-[380px] shadow border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[180px] md:h-[200px] lg:h-[220px] object-cover"
                />
                <div className="p-3 md:p-4">
                  <h2 className="text-base md:text-lg font-semibold text-gray-800">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">
                    {product.description || "High-quality product perfect for diverse business needs."}
                  </p>
                </div>
                <div className="px-3 pb-4">
                  <Link to={`/product/${product.id}`}>
                    <button className="w-full py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-orange-400 hover:text-white transition-all duration-300 shadow-md">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </AnimatedWrapper>
          ))}
      </div>
    </div>
  );
}

// Example product data with descriptions

