import React, { createContext, useState, useEffect } from "react";
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import firebaseConfig from "../firebase.config";
import { addToDatabaseCart } from '../../utilities/databaseManager';

firebase.initializeApp(firebaseConfig);

let Context = null
const { Provider, Consumer } = Context = createContext()


// get user profile information
const firestore = firebase.firestore()
const getUserProfile = (user) => {
  
  const userRef = firestore.collection("users").doc(user.uid);

  return userRef.get()
    .then(res => {
      if (res.exists) {
        return res.data();
      }  
    })
    .catch( error => console.log(error));
}

// save user info in firestore
const createUserProfile = (authUser, name) => {

  if (authUser) {
    const usersRef = firestore.doc(`users/${authUser.user.uid}`)
    return usersRef.get()
      .then(res => {
        if (!res.exists) {
          usersRef.set({
            name,
            email: authUser.user.email
          })
        }
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }
 
}

const UserProvider = (props) => {
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState([])
  // sign up user
  const login = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        setUser({email:response.email})
        return response;
      })
      .catch(err => {
        return err;
      })
  }

  // register user with email and password
  const registerUserWithEmailPassword = (email, password, name) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        createUserProfile(response, name)
        .then(() => {
          const createdUser = { name, email }
          setUser(createdUser)
        })

        return response;
      })
      .catch(err => { 
        alert(err.message)
      })
  }


  // initial time fetch user
  useEffect(() => {    
    firebase.auth().onAuthStateChanged(function (loginUser) {
        if(loginUser) {
          
            setUser({email:loginUser.email, uid:loginUser.uid})
         
         
        }
    });
  }, [])


  // logout user
  const logout = () => {
    firebase.auth().signOut().then(function () {
      setUser(null)
      

    }).catch(function (error) {
      console.log(error);
    })
  }


  // add product to cart
  const addToCart = item => {
    const toBeAddedKey = item.key;
    let sameProduct = cart.find(e => e.key  === toBeAddedKey)
    let count = 1;
    let newCart;
    
   if(!sameProduct) {
      item.proTotalPrice = item.quantity * item.price;
      newCart = [...cart, item]
   } else {
     count = sameProduct.quantity + item.quantity;
     sameProduct.quantity = count;
     sameProduct.proTotalPrice = sameProduct.price * item.quantity
    //  let index = cart.indexOf(sameProduct.key)
    //  cart[index] = sameProduct
    //  newCart = [...cart] 
     const others = cart.filter(e => e.key !== toBeAddedKey);
     newCart = [...others, sameProduct];
   }
   setCart(newCart);
   addToDatabaseCart(item.key, count);
   console.log(cart.length);
  }


  // product quantity add remove

  const calculateQuantity = (item, event) => {
    let product = cart.find(e => e.key === item.key)
    product.quantity = product.quantity + event;
    product.proTotalPrice = product.price * product.quantity;
    if(product.quantity === 0) {
      let updateProduct = cart.filter(e => e.key !== product.key)
      setCart(updateProduct)
    } else {
      let index = cart.indexOf(product.key);
      cart[index] = product
      let updateProduct = [...cart]
      setCart(updateProduct)
    }
    
  }

  // place order and remove cart item
  const checkOutOrder = () => {
    setCart([])
  }


  return (
    <Provider value={
      {
        user,
        registerUserWithEmailPassword,
        login,
        logout,
        cart,
        addToCart,
        checkOutOrder,
        calculateQuantity,
        getUserProfile
      }
    }>
      {props.children}
    </Provider>
  )

}

export { UserProvider, Consumer as UserConsumer, Context as UserContext };