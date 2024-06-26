import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
const ProductCard = ({ product }) => {
  const navigate=useNavigate();
  const discountPercent = Math.floor(((product.price - product.discountedPrice) / product.price) * 100);
  
  
  return (
    <div onClick={()=>navigate(`/product/${product.id}`)} className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt='"'
        />
      </div>

      <div className=" textPart bg-white p-3">
        <div>
          <p className="font-bold  text-left opacity-60">
            {product.brand}
          </p>
          <p className="text-left">{product.title}</p>
        </div>

        <div className="flex items-center space-x-2">
          <p className="font-semibold">₹{product.discountedPrice}</p>
          <p className="line-through opacity-50">₹{product.price}</p>
          <p className="text-green-600 font-semibold ">{discountPercent}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
