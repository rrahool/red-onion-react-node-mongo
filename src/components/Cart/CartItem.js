import React, { useContext } from 'react';
import './CartItem.css'
import { UserContext } from '../auth/useAuth';

const CartItem = ({item, onchangeHandler}) => {
  
  const {calculateQuantity} = useContext(UserContext)

  const {img, title, proTotalPrice, quantity} = item;
  // console.log(title, quantity, item, proTotalPrice);
  
  const sortTitle = title.slice(0,5)

  // let showFood = showFromCart(item);
  // console.log(showFood);
  

  return (
    <div className="order-item-aria my-3">
    <div className="single-order d-flex align-items-center">
      <div className="img-aria w-25 px-2">
        <img src={img} className="img" alt="" />
      </div>
      <div className="price-aria text-center w-25">
        <h6>{sortTitle}</h6>
        <h6>{proTotalPrice}</h6>
      </div>
      <div className="quantity-aria w-50">
        <div className="input-group">
          <button
           onClick={() => calculateQuantity(item, -1)}
            className="btn btn-default"
            ><i className="fas fa-minus"></i></button>
          <h6 
    
            className="text-center"
          > {quantity} </h6>
          <button
          onClick={() => calculateQuantity(item, 1)}
            className="btn btn-default"
            ><i className="fas fa-plus"></i></button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CartItem;