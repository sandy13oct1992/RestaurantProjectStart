
// Importing CSS classes for styling
import classes from './MealsSummary.module.css';

// Defining the 'MealsSummary' functional component
const MealsSummary = () => {
  // Returning JSX for rendering the 'MealsSummary' component
  return (
    // Creating a section element with a specific CSS class
    <section className={classes.summary}>
      {/* Displaying a heading */}
      <h2>Delicious Food, Delivered To You</h2>
      {/* Displaying a paragraph describing meal options */}
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      {/* Displaying a paragraph about the quality of ingredients and chefs */}
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

// Exporting the 'MealsSummary' component for use in other parts of the application
export default MealsSummary;