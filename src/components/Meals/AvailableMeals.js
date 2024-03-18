// Importing the 'Card' and 'MealItem' components and CSS classes for styling
import Card from '../UI/Card';
import MealItem from './MealItem';
import classes from './AvailableMeals.module.css';

// Dummy data representing available meals
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A German specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

// Defining the 'AvailableMeals' functional component
const AvailableMeals = () => {
  // Mapping over the dummy meals data to create a list of 'MealItem' components
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  // Rendering a section with a card containing the list of meals
  return (
    <section className={classes.meals}>
      {/* Wrapping the meal list in a 'Card' component */}
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

// Exporting the 'AvailableMeals' component for use in other parts of the application
export default AvailableMeals;