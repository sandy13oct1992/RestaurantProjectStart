// Importing the 'useContext' hook from the 'react' library
import { useContext,useState } from "react";
import OrderForm from "./OrderForm.js";

// Importing the 'Modal' and 'CartItem' components from their respective files
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

// Importing the 'classes' CSS module for styling
import classes from "./Cart.module.css";

// Importing the 'CartContext' from the 'cart-context' store
import CartContext from "../Store/CartContext.js";

// Defining the 'Cart' functional component
const Cart = (props) => {
  // Accessing the cart context using 'useContext'
  const cartCtx = useContext(CartContext);

  // const incrementQuantity = (item) => {
  //   // updateCartItemQuantity(item.id, item.quantity + 1);
  //   const newQuantity = item.quantity + 1;
  //   updateCartItemQuantity(item.id, newQuantity);
  //   // updateQuantityInDatabase(item.id, newQuantity);
  // };

  // const decrementQuantity = (item) => {
  //   // if (item.quantity > 1) {
  //   //   updateCartItemQuantity(item.id, item.quantity - 1);
  //   if (item.quantity > 1) {
  //     const newQuantity = item.quantity - 1;
  //     updateCartItemQuantity(item.id, newQuantity);
  //     // updateQuantityInDatabase(item.id, newQuantity);
  //   }
  // }

  // Calculating the total cart amount and formatting it as a string
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  // Checking if there are items in the cart
  const hasItems = cartCtx.items.length > 0;

  const [isOrderFormVisible, setIsOrderFormVisible] = useState(false);

  // Handler function to remove an item from the cart
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  // Handler function to add an item to the cart
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsOrderFormVisible(true); // Show the order form when "Order" button is clicked
  };

  const closeOrderFormHandler = () => {
    setIsOrderFormVisible(false); // Hide the order form
  };
  // Creating a list of cart items using the 'map' method..
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        // Rendering individual 'CartItem' components for each item in the cart
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  // Returning a JSX structure for the 'Cart' component
  return (
    // Wrapping the component in a 'Modal' component
    <Modal onClose={props.onClose}>
      {cartItems}
      {/* Displaying the total amount of items in the cart */}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {/* Buttons for closing the cart and placing an order */}
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {/* Conditional rendering: Only display the 'Order' button if there are items in the cart */}
        {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
      </div>
      {isOrderFormVisible && <OrderForm onClose={closeOrderFormHandler} />} {/* Conditionally render the OrderForm */}
    </Modal>
  );
};

// Exporting the 'Cart' component for use in other parts of the application
export default Cart;