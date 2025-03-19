import React, { useState } from "react";
import "./style.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useCart } from "../../Context/Cartcontext";


const ProductComponent = (props) => {

    const {cart, addToCart, minusToCart} = useCart();
//   const [showBuyNowBtn, setShowBuyNowBtn] = useState(true);


const existingProduct = cart.find((item)=>item.id === props.product.id)
console.log({existingProduct});


  const [count, setCount] = useState(0);

  const handleToggleAddToCartBtn = () => {
    // setShowBuyNowBtn(false);
    setCount(count + 1);
    addToCart(props.product);
    
  };
  const handleToggleMinusToCartBtn = () =>{
    setCount(count -1);
    minusToCart(props.product);
  }

  return (
 
 <div className="product_comp_parent_buynowBtn_container">
      <div className="product_comp_parent_container_img_text">
        <img src={props.product.image} className="product_comp_container_img" />
        <div className="product_comp_text">
          <p>{props.product.title}</p>
        </div>
      </div>

      <div className="product_comp_buynowBtn_Plus">
      {!existingProduct
      ?
      <button className="product_comp_buynowBtn">Buy Now</button>
      :
      <div className="product_comp_minusBtn_quantity">
        <div
          className="product_comp_minusBtn"
          onClick={handleToggleMinusToCartBtn}
        >
          <FaMinus />
        </div>
        <div>{count}</div>
      </div>
    }
        <div
          className="product_comp_PlusBtn"
          onClick={handleToggleAddToCartBtn}
        >
          <FaPlus />
        </div>
      </div>
    </div>

  );
};
export default ProductComponent;

// 🔥 What This Code Does:
// ✅ Displays a product card with:
// ✔️ An image
// ✔️ A product title
// ✔️ A "Buy Now" button
// ✔️ A "+" icon
