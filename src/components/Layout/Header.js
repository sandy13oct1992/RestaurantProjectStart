// Importing the 'Fragment' component from 'react' for creating a wrapper without a parent DOM element
import { Fragment } from 'react';

// Importing the 'HeaderCartButton' component
import HeaderCartButton from './HeaderCartButton';

// Importing the 'mealsImage' from the assets folder
import mealsImage from '../../assets/meals.jpg';

// Importing CSS classes for styling
import classes from './Header.module.css';

// Defining the 'Header' functional component with props
const Header = (props) => {
  return (
    // Using a Fragment to create a wrapper without additional DOM elements
    <Fragment>
      {/* Creating a header element with a specific CSS class */}
      <header className={classes.header}>
        {/* Displaying the title 'ReactMeals' */}
        <h1>ReactMeals</h1>
        {/* Rendering the 'HeaderCartButton' component and passing 'onShowCart' as a prop */}
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      {/* Creating a div element with a specific CSS class for the main image */}
      <div className={classes['main-image']}>
        {/* Displaying an image with alt text */}
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

// Exporting the 'Header' component for use in other parts of the application
export default Header;