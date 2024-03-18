
// Importing necessary hooks and components from 'react'
import { useContext, useEffect, useState } from 'react';

// Importing the 'CartIcon' component
import CartIcon from '../Cart/CartIcon';

// Importing the 'CartContext' from the store
import CartContext from '../Store/Cart-Context';

// Importing CSS classes for styling
import classes from './HeaderCartButton.module.css';

// Defining the 'HeaderCartButton' functional component with props
const HeaderCartButton = (props) => {
  // State to manage button highlight animation
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  // Accessing the cart context using 'useContext'
  const cartCtx = useContext(CartContext);

  // Extracting 'items' from the cart context
  const { items } = cartCtx;

  // Calculating the total number of cart items
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  // Composing CSS classes for the button, including 'bump' class for animation
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  // Setting up an effect to handle button highlight animation
  useEffect(() => {
    // If there are no items in the cart, don't animate
    if (items.length === 0) {
      return;
    }
    // Trigger the button highlight animation
    setBtnIsHighlighted(true);

    // Create a timer to remove the highlight after 300 milliseconds
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    // Cleanup function to clear the timer when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  // Rendering the cart button with icon, text, and badge
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        {/* Rendering the 'CartIcon' component */}
        <CartIcon />
      </span>
      <span>Your Cart</span>
      {/* Displaying the number of items in the cart as a badge */}
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

// Exporting the 'HeaderCartButton' component for use in other parts of the application
export default HeaderCartButton;