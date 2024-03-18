// Importing the necessary 'React' library
import React from 'react';

// Importing CSS classes for styling
import classes from './Input.module.css';

// Defining the 'Input' component using 'React.forwardRef' to access the input element
const Input = React.forwardRef((props, ref) => {
  // Returning JSX for rendering the 'Input' component
  return (
    // Creating a div element with a specific CSS class
    <div className={classes.input}>
      {/* Creating a label for the input element */}
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* Creating an input element and forwarding the 'ref' to it, along with other input properties */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

// Exporting the 'Input' component for use in other parts of the application
export default Input;