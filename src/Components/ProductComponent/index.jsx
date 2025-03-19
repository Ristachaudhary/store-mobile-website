import React, { useState } from "react";
import "./style.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useCart } from "../../Context/Cartcontext";


const ProductComponent = (props) => {

    const {addToCart} = useCart();
//   const [showBuyNowBtn, setShowBuyNowBtn] = useState(true);
  const [count, setCount] = useState(0);

  const handleToggleAddToCartBtn = () => {
    // setShowBuyNowBtn(false);
    setCount(count + 1);
    
  };
  const handleToggleMinusToCartBtn = () =>{
    setCount(count -1);
  }

  return (
 
 <div className="product_comp_parent_buynowBtn_container">
      <div className="product_comp_parent_container_img_text">
        <img src={props.image} className="product_comp_container_img" />
        <div className="product_comp_text">
          <p>{props.title}</p>
        </div>
      </div>

      <div className="product_comp_buynowBtn_Plus">
      {count===0
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
          <FaPlus onClick={()=>addToCart(props.product)}/>
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
