// Importing the 'useContext' hook from 'react'
import { useContext } from 'react';

// Importing the 'MealItemForm' component
import MealItemForm from './MealItemForm';

// Importing CSS classes for styling
import classes from './MealItem.module.css';

// Importing the 'CartContext' from the store
import CartContext from '../Store/Cart-Context';

// Defining the 'MealItem' functional component with props
const MealItem = (props) => {
  // Accessing the cart context using 'useContext'
  const cartCtx = useContext(CartContext);

  // Formatting the 'price' prop as a string with a dollar sign and two decimal places
  const price = `$${props.price.toFixed(2)}`;

  // Handler function to add an item to the cart
  const addToCartHandler = (amount) => {
    // Adding an item to the cart using cart context
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  // Rendering a list item for the meal
  return (
    <li className={classes.meal}>
      <div>
        {/* Displaying the name of the meal */}
        <h3>{props.name}</h3>
        {/* Displaying the description of the meal */}
        <div className={classes.description}>{props.description}</div>
        {/* Displaying the price of the meal */}
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        {/* Rendering the 'MealItemForm' component and passing 'addToCartHandler' as a prop */}
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

// Exporting the 'MealItem' component for use in other parts of the application
export default MealItem;