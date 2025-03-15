import { Link } from "react-router-dom";
import AnimatedWrapper from "../../components/AnimatedWrapper";
import OrderCards from "../../Right-side files/OrderCards";

type Product = {
  id: number;
  name: string;
  image: string;
  price?: number;
  description?: string;
};

export default function BusinessCards({ products }: { products: Product[] }) {
  return (
    <div className="lg:pl-[16vw] lg:p-8">
      {/* Heading */}
      <AnimatedWrapper from="left">
        <div className="pl-[5vw]">
          <p className="text-gray-400 font-semibold">Some of Our</p>
          <p className="text-blue-900 text-4xl font-bold">Business Cards</p>
          <p className="text-2xl">_______</p>
        </div>
      </AnimatedWrapper>

      {/* Cards */}
      <div className="w-full space-y-6">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          What We Offer
        </h1>

        <div className="flex flex-wrap justify-center gap-6">
        {products?.length ? (
  products
    .filter((product) => product.id >= 21 && product.id <= 32)
    .map((product) => (
      <AnimatedWrapper from="bottom" key={product.id}>
        <div className="w-[280px] h-[400px] shadow-lg border border-gray-300 rounded-lg overflow-hidden bg-white hover:shadow-2xl transition duration-300">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 space-y-2">
            <h2 className="text-lg font-semibold text-gray-800">
              {product.name}
            </h2>
            <p className="text-sm text-gray-500">
              {product.description || "No description available."}
            </p>
          </div>
          <div className="p-4">
            <Link to={`/product/${product.id}`}>
              <button className="w-full py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-orange-400 hover:text-white transition">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </AnimatedWrapper>
    ))
) : (
  <p>No products available.</p>
)}
</div>
      </div>
      {/* Cards End */}

      <OrderCards />
    </div>
  );
}