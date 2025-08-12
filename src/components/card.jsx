import React from "react";

const Card = ({ product }) => {
  const { image, title, price, description, rating } = product;

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />

      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price}</p>

        <div className="product-rating">
          {"⭐".repeat(Math.round(rating.rate))} ({rating.count} reviews)
        </div>

        <p className="product-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
