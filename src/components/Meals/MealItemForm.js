// Importing the 'useRef' and 'useState' hooks from 'react'
import { useRef, useState } from 'react';

// Importing the 'Input' component
import Input from '../UI/Input';

// Importing CSS classes for styling
import classes from './MealItemForm.module.css';

// Defining the 'MealItemForm' functional component with props
const MealItemForm = (props) => {
  // State to manage the validity of the entered amount
  const [amountIsValid, setAmountIsValid] = useState(true);

  // Creating a ref to access the input element
  const amountInputRef = useRef();

  // Handler function for form submission
  const submitHandler = (event) => {
    event.preventDefault();

    // Getting the entered amount from the input ref
    const enteredAmount = amountInputRef.current.value;

    // Parsing the entered amount as a number
    const enteredAmountNumber = +enteredAmount;

    // Validating the entered amount
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      // Setting 'amountIsValid' to 'false' and exiting the function
      setAmountIsValid(false);
      return;
    }

    // Calling the 'onAddToCart' prop with the entered amount as an argument
    props.onAddToCart(enteredAmountNumber);
  };

  // Rendering a form with input, button, and validation message
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      {/* Button for adding the item to the cart */}
      <button>+ Add</button>
      {/* Displaying a validation message if 'amountIsValid' is 'false' */}
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

// Exporting the 'MealItemForm' component for use in other parts of the application
export default MealItemForm;