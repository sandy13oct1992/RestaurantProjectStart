// Importing the 'useState' hook from 'react'
import { useState } from 'react';

// Importing the 'Header', 'Meals', 'Cart', and 'CartProvider' components
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './components/Store/CartProvider';

// Defining the 'App' function component
function App() {
  // State to manage whether the cart is shown or hidden
  const [cartIsShown, setCartIsShown] = useState(false);

  // Handler function to show the cart
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  // Handler function to hide the cart
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  // Rendering the 'App' component
  return (
    // Wrapping the entire application in 'CartProvider' to provide cart state
    <CartProvider>
      {/* Conditional rendering of the 'Cart' component if 'cartIsShown' is true */}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {/* Rendering the 'Header' component with 'onShowCart' handler */}
      <Header onShowCart={showCartHandler} />
      <main>
        {/* Rendering the 'Meals' component */}
        <Meals />
      </main>
    </CartProvider>
  );
}

// Exporting the 'App' component as the main component of the application
export default App;
