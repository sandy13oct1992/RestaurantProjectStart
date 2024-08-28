// Importing the 'useReducer' hook from 'react'
import { useEffect, useReducer } from 'react';

// Importing the 'CartContext' from './cart-context'
import CartContext from './CartContext.js';
import { useContext } from 'react';

// const CartProvider = (props) => {
//   const [cartData, setCartData] = useState([]);

//   const updateCartItemQuantity = (id, quantity) => {
//     setCartData((prevCartData) => {
//       return prevCartData.map((item) => 
//         item.id === id ? { ...item, quantity } : item
//       );
//     });
//   };

//   const addItemToCartHandler = (item) => {
//     // updateCartItemQuantity(item.id, item.quantity + 1);
//     const newQuantity = item.quantity + 1;
//     updateCartItemQuantity(item.id, newQuantity);
//     // updateQuantityInDatabase(item.id, newQuantity);
//   };

//   const removeItemFromCartHandler = (item) => {
//     // if (item.quantity > 1) {
//     //   updateCartItemQuantity(item.id, item.quantity - 1);
//     if (item.quantity > 0) {
//       const newQuantity = item.quantity - 1;
//       updateCartItemQuantity(item.id, newQuantity);
//       // updateQuantityInDatabase(item.id, newQuantity);
//     }
//   }

// }
// Defining the default state for the cart
const defaultCartState = {
  items: [],          // An array to store cart items
  totalAmount: 0,     // The total amount of the cart
};

// Reducer function to handle cart actions
const cartReducer = (state, action) => {
  // Handling the 'ADD' action type
  if (action.type === 'ADD') {
    // Calculating the updated total amount when adding an item
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // Finding the index of an existing cart item, if any
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    // Checking if the item already exists in the cart
    if (existingCartItem) {
      // If it exists, update the existing item's amount
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // If it doesn't exist, add the item to the cart
      updatedItems = state.items.concat(action.item);
    }

    // Return the updated cart state
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  // Handling the 'REMOVE' action type
  if (action.type === 'REMOVE') {
    // Finding the index of the item to be removed
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    // Checking if the item's amount is 1, meaning we should remove it completely
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      // If the item's amount is more than 1, decrease its amount by 1
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    // Return the updated cart state
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  // Default case: return the default cart state
  return defaultCartState;
};

// Defining the 'CartProvider' component
const CartProvider = (props) => {
  // Using 'useReducer' to manage cart state and actions
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
//  const [isLoggedIn, setIsLoggedIn] = useContext(false);

 


 
  // Handler function to add an item to the cart
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  // Handler function to remove an item from the cart
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  // Creating a cart context object
  const cartContext = {
    // isLoggedIn:isLoggedIn,
    // setIsLoggedIn:setIsLoggedIn,
    items: cartState.items,
    // items:cartData,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  // Returning the 'CartProvider' component with the cart context
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

// Exporting the 'CartProvider' component for use in other parts of the application
export default CartProvider;

