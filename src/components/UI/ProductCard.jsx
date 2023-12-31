import React from "react";

import { motion } from "framer-motion";
import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from 'react-toastify';


const ProductCard = ({ item }) => {

  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    }));


    toast.success("product added successfully");
  };


  return (
    <Col lg='3' md='4'>

      <div className="product__item">
        <div className="product__img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">{item.productName}</h3>
          <span className="text-center">{item.category}</span>
        </div>
        <div className="product__rating">
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
          <span>
            <i class="ri-star-s-fill"></i>
          </span>
        </div>

        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">INR {item.price}</span>

          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i class="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
