// Importing the 'Fragment' component from 'react' to create a wrapper without a parent DOM element
import { Fragment } from 'react';

// Importing the 'MealsSummary' and 'AvailableMeals' components
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

// Defining the 'Meals' functional component
const Meals = () => {
  // Returning JSX for rendering the 'Meals' component
  return (
    // Using a 'Fragment' to create a wrapper without additional DOM elements
    <Fragment>
      {/* Rendering the 'MealsSummary' component */}
      <MealsSummary />
      {/* Rendering the 'AvailableMeals' component */}
      <AvailableMeals />
    </Fragment>
  );
};

// Exporting the 'Meals' component for use in other parts of the application
export default Meals;