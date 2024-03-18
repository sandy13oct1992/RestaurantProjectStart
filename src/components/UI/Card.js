
// Importing CSS classes for styling
import classes from './Card.module.css';

// Defining the 'Card' functional component with props
const Card = (props) => {
  // Returning JSX for rendering the 'Card' component
  return (
    // Creating a div element with a specific CSS class
    <div className={classes.card}>
      {/* Rendering child components passed as 'props.children' */}
      {props.children}
    </div>
  );
};

// Exporting the 'Card' component for use in other parts of the application
export default Card;