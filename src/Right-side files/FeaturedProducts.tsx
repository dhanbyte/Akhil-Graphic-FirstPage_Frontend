import { Link } from "react-router-dom";
import products  from "../JsonFiles/products.json";
import AnimatedWrapper from "../components/AnimatedWrapper";

export default function FeatureProducts() {
  
  return (
    <div className="p-8 w-full space-y-6">

      <h1 className="text-3xl font-bold text-center mb-6">Featured Products</h1>

      <div className="flex flex-wrap justify-center py-8 gap-6">
        {products.filter(product =>product.id >= 1 && product.id <= 20 ).map((product: any) => (
      <AnimatedWrapper from="bottom">
          <div key={product.id} className="w-[250px] h-[350px] shadow border-amber-600 rounded-md overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-200">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4 py-4">
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
            </div>
              <Link to={`/product`} className="p-6">
              <button className="w-[80%] py-2 rounded-xl border border-gray-300 text-gray-500 shadow-xl hover:bg-orange-400 hover:text-white transition">
                Add to Card
              </button>
              </Link>

          </div>
        </AnimatedWrapper>
        ))}
      </div>
    </div>
  );
}
