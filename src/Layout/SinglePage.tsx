import { useParams } from "react-router-dom";
import products from "../JsonFiles/products.json";
import OrderCards from "../Right-side files/OrderCards";
import WhatWeOffer from "../Right-side files/WhatWeOffer";

export default function SinglePage() {
 

  const { id } = useParams<{ id: string }>();
  const product = products.find((p)=> p.id === Number(id));

  if (!product) return <div>Loading...</div>;

  return (
    <div className="lg:pl-[11vw]">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-15 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* Product Image */}
            <img
              alt={product.name}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover border-1 border-gray-200 shadow-xl shadow-gray-400 object-center rounded"
              src={product.image}
            />

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              {/* Product Brand */}
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Name
              </h2>

              {/* Product Name */}
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>

              {/* Product Rating */}
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>

                  <span className="text-gray-600 ml-3">Reviews</span>
                </span>
              </div>

              {/* Product Description */}
              <p className="leading-relaxed">
               {product.description}
              </p>

              {/* Product Color & Size Options */}
             

              {/* Product Price & Actions */}
              <div className="flex py-20">
                <span className="title-font font-medium text-2xl text-gray-900">
                  
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                 Contact Us
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=" md:pl-8 lg:pl-[8vw] w-full space-y-6">

      <OrderCards/>
      <WhatWeOffer/>
      </div>
    </div>
  );
}
