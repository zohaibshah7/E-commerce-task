import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ item }) {
  const { thumbnail, title, price, category, id } = item;

  return (
    <Link
      to={`/products/${id}`}
      className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md my-4 transition-transform duration-300 transform hover:scale-105 cursor-pointer"
    >
      <div>
        <img
          alt="e-commerce"
          className="object-cover object-center w-full h-full block"
          src={thumbnail}
        />
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {title}
          </h2>
          <p className="mt-1">{price}$</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
