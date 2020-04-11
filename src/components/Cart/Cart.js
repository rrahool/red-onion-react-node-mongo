import React, { useContext, useState, useEffect } from 'react';
import { UserContext, UserProvider } from '../auth/useAuth';
import InputItem from '../auth/InputItem/InputItem'
import './Cart.css'
import CartItem from './CartItem';
import { withRouter, Link } from 'react-router-dom';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';

const Cart = (props) => {
  const { cart, checkOutOrder, user } = useContext(UserContext)

  const [address, setAddress] = useState('')
  const [homeNo, setHomeNo] = useState('')
  const [flatNo, setFlatNo] = useState('')
  const [name, setName] = useState('')
  const [instruction, setInstruction] = useState('')
  const [deliveryFee] = useState(2)
  const [tax] = useState(5)
  const [subTotal, setSubTotal] = useState(5)
  const [cartElement, setCartElement] = useState([])
  
  useEffect(()=> {
      let totalPrice = cart.reduce( (total, item) => total + item.proTotalPrice , 0 )
    setSubTotal(totalPrice)
  },[cart])

  useEffect( () => {
    //cart
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    console.log(productKeys);
    fetch('http://localhost:4000/getProductsByKey/', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productKeys) 
    })
    .then(res => res.json())
    .then(data => {
          console.log(data);
          
          const cartProducts = productKeys.map( key => {
          const product = data.find(pd => pd.key === key);
          console.log(product);

          product.quantity = savedCart[key];
          console.log(product.quantity);

          return product;
        });
        // console.log(cartProducts);
        setCartElement(cartProducts);
    })
    
}, []);

  const [disabled, setDisabled] = useState(false)
  useEffect(()=> {
              if(name && homeNo && flatNo && instruction && address) {
                  setDisabled(false)
              } else {
                setDisabled(true)
              }
  },[address,homeNo,flatNo,name,instruction])

  // input field handler
  const onchangeHandler = e => {
    const { name, value } = e.target;
    if (name === 'address') {
      setAddress(value)
    }
    if (name === 'homeNo') {
      setHomeNo(value)
    }
    if (name === 'flatNo') {
      setFlatNo(value)
    }
    if (name === 'name') {
      setName(value)
    }
    if (name === 'instrunCiton') {
      setInstruction(value)
    }
  }

  
if(cart.length === 0) {
  return (
    <div className="container pt-5 mt-5 text-center">
      <h1 className="text-center">You have no item in your cart</h1>
      <br/>
      <Link to="/foods" className="text-danger" style={{textDecoration: "none"}}>
        <h2>Please See Our Food Items</h2>
      </Link>
    </div>
  )
}


const handleCheckout = () => {

  checkOutOrder()
  props.history.push('/checkout')
}
const handleSubmit = e => {
  e.preventDefault()
  
  //TODO: Rahul move this after payment
  console.log(user.email);
  
  const savedCart = getDatabaseCart(); 
  const orderDetails = {email: user.email, cart: savedCart};

  fetch('http://localhost:4000/placeOrder', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails) 
    })
    .then(res => res.json())
    .then(data => {
      console.log("Order Placed", data);
      alert("Order Placed Successfully. Your Order ID is: " + data._id);
      processOrder();
  });
}

// const onSubmit = data => {
//   //TODO: Rahul move this after payment
//   console.log(getUserProfile);
  
//   // const savedCart = getDatabaseCart(); 
// }

  return (
    <div className="container pt-5 mt-5">
      <div className="row d-flex justify-content-between">
        <div className="col-md-5">
          <div className="delivery-details">
            <h3>Edit Delivery Details </h3>
          </div>

          <form onSubmit={handleSubmit}>
            <InputItem name="address"
              type="text" placeholder="Deliver to door"
              onchangeHandler={onchangeHandler} value={address} />
            <InputItem name="homeNo"
              type="text" placeholder="107 Rd No 12"
              onchangeHandler={onchangeHandler} value={homeNo} />
            <InputItem name="flatNo"
              type="text" placeholder="Flat, suite or flor"
              onchangeHandler={onchangeHandler} value={flatNo} />
            <InputItem name="name"
              type="text" placeholder="Business Name "
              onchangeHandler={onchangeHandler} value={name} />
            <div className="form-group">
              <textarea className="form-control"
                onChange={onchangeHandler}
                value={instruction}
                name="instrunCiton"
                placeholder="Add Delivery Instruction " rows="3"></textarea>
            </div>
            <button type="submit" className="btn sign-up-btn w-100">Save and Continue</button>
          </form>
        </div>
        <div className="col-md-5 f-right">
          <div className="final-order-aria">
            <h6 className="resturant-name">From <b>Gulshan Plazza Restaura GPR</b> </h6>
            <h6>Arriving in 20-30 min</h6>
            <h6>107 Rd No 12</h6>

            <div className="orders-items-aria">

              {cart.map(item => <CartItem item={item} key={item.key} quantity={item.quantity} />)}

            </div>
            <div className="order-price-aira">
              <div className="cart-item">
                <div className="row">
                  <div className="col-md-8">
                    <h6>Subtotal: </h6>
                    <h6>Tax:</h6>
                    <h6>Delivery fee:</h6>
                    <br/>
                    <h5>Total:</h5>
                  </div>
                  
                  <div className="col-md-4 status">
                    <h6>$ <span id="sub-total-price">{subTotal.toFixed(2)}</span> </h6>
                    <h6>$ <span> {tax}.00</span> </h6>
                    <h6>$ <span>{deliveryFee}.00</span> </h6>
                    <br/>
                    <h5>$ <span id="total-price">{(subTotal+tax+deliveryFee).toFixed(2)}</span> </h5>
                  </div>
                </div>
                <br/>
                <button 
                  type="submit" 
                  disabled={disabled} 
                  className={disabled ? 'btn place-order-btn-disable': 'btn sign-up-btn w-100'} 
                  // className="btn sign-up-btn w-100" 
                  onClick={handleCheckout} >Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Cart);