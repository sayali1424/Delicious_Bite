import React from "react";
import categoryImg01 from "../../../assets/images/Pizzaaa.webp";
import categoryImg02 from "../../../assets/images/product_04.jpg";
import categoryImg03 from "../../../assets/images/fries.jpg";
import categoryImg04 from "../../../assets/images/Coke.jpg";
import "../../../styles/category.css";

const categoryData = [
  {
    display: "Pizza",
    imgUrl: categoryImg01,
    imgClass: "small-img",
  },
  {
    display: "Burger",
    imgUrl: categoryImg02,
    imgClass: "small-img",
  },
  {
    display: "Fries",
    imgUrl: categoryImg03,
    imgClass: "small-img",
  },
  {
    display: "Coke",
    imgUrl: categoryImg04,
    imgClass: "small-img",
  },
];

const Category = () => {
  return (
    <div className="category__container">
      <div className="category__scroll-wrapper">
        {categoryData.map((item, index) => (
          <div className="category__item-wrapper" key={index}>
            <div className="category__item d-flex flex-column align-items-center">
              <div className={`category__img ${item.imgClass ? item.imgClass : ''}`}>
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6 className="category__title">{item.display}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
