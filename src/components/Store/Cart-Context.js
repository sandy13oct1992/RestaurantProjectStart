// Importing the 'React' library
import React from 'react';

// Creating a context called 'CartContext' with default values
const CartContext = React.createContext({
  // Default value for 'items' is an empty array
  items: [],
  // Default value for 'totalAmount' is 0
  totalAmount: 0,
  // Default value for 'addItem' is an empty function
  addItem: (item) => {},
  // Default value for 'removeItem' is an empty function
  removeItem: (id) => {}
});

// Exporting the 'CartContext' for use in other parts of the application
export default CartContext;