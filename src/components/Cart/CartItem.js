// Importing the CSS module for styling the component
import classes from './CartItem.module.css';

// Defining the 'CartItem' functional component with props
const CartItem = (props) => {
  // Formatting the 'price' prop as a string with a dollar sign and two decimal places
  const price = `$${props.price.toFixed(2)}`;

  // Returning JSX for rendering a cart item
  return (
    // Creating a list item with a specific CSS class
    <li className={classes['cart-item']}>
      <div>
        {/* Displaying the name of the item */}
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          {/* Displaying the item's price */}
          <span className={classes.price}>{price}</span>
          {/* Displaying the item's quantity */}
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        {/* Button to remove the item */}
        <button onClick={props.onRemove}>−</button>
        {/* Button to add more of the item */}
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

// Exporting the 'CartItem' component for use in other parts of the application
export default CartItem;