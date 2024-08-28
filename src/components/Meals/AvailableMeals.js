// // // // Importing the 'Card' and 'MealItem' components and CSS classes for styling
// // // import Card from '../UI/Card';
// // // import MealItem from './MealItem';
// // // import classes from './AvailableMeals.module.css';

// // // // Dummy data representing available meals
// // // const DUMMY_MEALS = [
// // //   {
// // //     id: 'm1',
// // //     name: 'Sushi',
// // //     description: 'Finest fish and veggies',
// // //     price: 22.99,
// // //   },
// // //   {
// // //     id: 'm2',
// // //     name: 'Schnitzel',
// // //     description: 'A German specialty!',
// // //     price: 16.5,
// // //   },
// // //   {
// // //     id: 'm3',
// // //     name: 'Barbecue Burger',
// // //     description: 'American, raw, meaty',
// // //     price: 12.99,
// // //   },
// // //   {
// // //     id: 'm4',
// // //     name: 'Green Bowl',
// // //     description: 'Healthy...and green...',
// // //     price: 18.99,
// // //   },
// // // ];

// // // // Defining the 'AvailableMeals' functional component
// // // const AvailableMeals = () => {
// // //   // Mapping over the dummy meals data to create a list of 'MealItem' components
// // //   const mealsList = DUMMY_MEALS.map((meal) => (
// // //     <MealItem
// // //       key={meal.id}
// // //       id={meal.id}
// // //       name={meal.name}
// // //       description={meal.description}
// // //       price={meal.price}
// // //     />
// // //   ));

// // //   // Rendering a section with a card containing the list of meals
// // //   return (
// // //     <section className={classes.meals}>
// // //       {/* Wrapping the meal list in a 'Card' component */}
// // //       <Card>
// // //         <ul>{mealsList}</ul>
// // //       </Card>
// // //     </section>
// // //   );
// // // };

// // // // Exporting the 'AvailableMeals' component for use in other parts of the application
// // // export default AvailableMeals;

// import React, { useState } from 'react';
// import Card from '../UI/Card';
// import MealItem from './MealItem';
// import classes from './AvailableMeals.module.css';

// // Dummy data representing available meals
// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A German specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ];

// // Defining the 'AvailableMeals' functional component
// const AvailableMeals = () => {
//   const [meals, setMeals] = useState(DUMMY_MEALS);
//   const [newMeal, setNewMeal] = useState({ name: '', description: '', price: '' });
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showAddMealForm, setShowAddMealForm] = useState(false);
//   const [credentials, setCredentials] = useState({ email: '', password: '' });
//   const [isAuthorized, setIsAuthorized] = useState(false);

//   const loginHandler = () => {
//     // Replace with real authentication logic
//     if (credentials.email === 'san@gmail.com' && credentials.password === 'password') {
//       setIsLoggedIn(true);
//       setIsAuthorized(true);
//     } else if (credentials.password === 'password') {
//       setIsLoggedIn(true);
//       setIsAuthorized(false);
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   const logoutHandler = () => {
//     setIsLoggedIn(false);
//     setIsAuthorized(false);
//     setCredentials({ email: '', password: '' });
//   };

//   const addMealHandler = () => {
//     const newMealData = {
//       id: 'm' + (meals.length + 1),
//       name: newMeal.name,
//       description: newMeal.description,
//       price: parseFloat(newMeal.price),
//     };

//     setMeals((prevMeals) => [...prevMeals, newMealData]);
//     setNewMeal({ name: '', description: '', price: '' });
//     setShowAddMealForm(false);
//   };

//   const mealsList = meals.map((meal) => (
//     <MealItem
//       key={meal.id}
//       id={meal.id}
//       name={meal.name}
//       description={meal.description}
//       price={meal.price}
//     />
//   ));

//   if (!isLoggedIn) {
//     return (
//       <section className={classes.login}>
//         <Card>
//           <div className={classes.loginForm}>
//             <input
//               type="email"
//               placeholder="Email"
//               value={credentials.email}
//               onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={credentials.password}
//               onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
//             />
//             <button onClick={loginHandler}>Login</button>
//           </div>
//         </Card>
//       </section>
//     );
//   }

//   return (
//     <section className={classes.meals}>
//       <Card>
//         <ul>{mealsList}</ul>
//       </Card>
//       {isAuthorized && (
//         <Card>
//           <button onClick={() => setShowAddMealForm(true)}>Add Meal</button>
//           {showAddMealForm && (
//             <div className={classes.addMeal}>
//               <input
//                 type="text"
//                 placeholder="Meal Name"
//                 value={newMeal.name}
//                 onChange={(e) => setNewMeal((prev) => ({ ...prev, name: e.target.value }))}
//               />
//               <input
//                 type="text"
//                 placeholder="Description"
//                 value={newMeal.description}
//                 onChange={(e) => setNewMeal((prev) => ({ ...prev, description: e.target.value }))}
//               />
//               <input
//                 type="number"
//                 placeholder="Price"
//                 value={newMeal.price}
//                 onChange={(e) => setNewMeal((prev) => ({ ...prev, price: e.target.value }))}
//               />
//               <button onClick={addMealHandler}>Add Meal</button>
//             </div>
//           )}
//         </Card>
//       )}
//       <button onClick={logoutHandler}>Logout</button>
//     </section>
//   );
// };

// export default AvailableMeals;

import React, { useState } from 'react';
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

const AvailableMeals = () => {
  const [meals, setMeals] = useState(DUMMY_MEALS);
  const [newMeal, setNewMeal] = useState({ name: '', description: '', price: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAddMealForm, setShowAddMealForm] = useState(false);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [showLoginForm, setShowLoginForm] = useState(false);

  const loginHandler = () => {
    if (credentials.email === 'san@gmail.com' && credentials.password === 'password') {
      setIsLoggedIn(true);
      setShowLoginForm(false);
    } else {
      alert('Invalid credentials');
    }
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    setCredentials({ email: '', password: '' });
  };

  const addMealHandler = () => {
    const newMealData = {
      id: 'm' + (meals.length + 1),
      name: newMeal.name,
      description: newMeal.description,
      price: parseFloat(newMeal.price),
    };

    setMeals((prevMeals) => [...prevMeals, newMealData]);
    setNewMeal({ name: '', description: '', price: '' });
    setShowAddMealForm(false);
  };

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
      {showLoginForm && (
        <Card>
          <div className={classes.loginForm}>
            <input
              type="email"
              placeholder="Email(this option is only valid for shop owner)"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
            <button onClick={loginHandler}>Login</button>
          </div>
        </Card>
      )}
      {isLoggedIn && (
        <>
          <button onClick={() => setShowAddMealForm(true)}>Add Meal</button>
          {showAddMealForm && (
            <div className={classes.addMeal}>
              <input
                type="text"
                placeholder="Meal Name"
                value={newMeal.name}
                onChange={(e) => setNewMeal((prev) => ({ ...prev, name: e.target.value }))}
              />
              <input
                type="text"
                placeholder="Description"
                value={newMeal.description}
                onChange={(e) => setNewMeal((prev) => ({ ...prev, description: e.target.value }))}
              />
              <input
                type="number"
                placeholder="Price"
                value={newMeal.price}
                onChange={(e) => setNewMeal((prev) => ({ ...prev, price: e.target.value }))}
              />
              <button onClick={addMealHandler}>Add Meal</button>
            </div>
          )}
          <button onClick={logoutHandler}>Logout</button>
        </>
      )}
      {!isLoggedIn && !showLoginForm && <button onClick={() => setShowLoginForm(true)}>Login</button>}
    </section>
  );
};

export default AvailableMeals;


// import React, { useState, useRef, useContext } from 'react';
// import Card from '../UI/Card';
// import MealItem from './MealItem';
// import classes from './AvailableMeals.module.css';
// import CartContext from '../Store/CartContext';

// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A German specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ];

// const AvailableMeals = () => {
//   const [meals, setMeals] = useState(DUMMY_MEALS);
//   const [newMeal, setNewMeal] = useState({ name: '', description: '', price: '' });
//   const [showAddMealForm, setShowAddMealForm] = useState(false);
//   const [isAuthorized, setIsAuthorized] = useState(false);
//   const [email, setEmail] = useState('');

//   const emailInputRef = useRef();
//   const passInputRef = useRef();
//   const [isLogin, setIsLogin] = useState(true);
//   const [error, setError] = useState('');

//   const authCtx = useContext(CartContext);

//   const switchAuthModeHandler = () => {
//     setIsLogin((prevState) => !prevState);
//     setError('');
//   };

//   const submitHandler = async (event) => {
//     event.preventDefault();

//     const email = emailInputRef.current.value;
//     const password = passInputRef.current.value;

//     let url;
//     if (isLogin) {
//       url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBHOfr5Y0xCLDjYWl_a37z5qGXBuNzYSuc';
//     } else {
//       url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBHOfr5Y0xCLDjYWl_a37z5qGXBuNzYSuc';
//     }

//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         body: JSON.stringify({
//           email: email,
//           password: password,
//           returnSecureToken: true,
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         let errorMessage = 'Authentication failed!';
//         if (data && data.error && data.error.message) {
//           errorMessage = data.error.message;
//         }
//         throw new Error(errorMessage);
//       }

//       // authCtx.logInHandler(data.idToken);
//       setEmail(email);
//       // authCtx.setEmail(email);
//       // authCtx.updateCurrentUserEmail(email);

//       setIsAuthorized(email === 'sandeep@gmail.com');
//       setError('');
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const addMealHandler = () => {
//     const newMealData = {
//       id: 'm' + (meals.length + 1),
//       name: newMeal.name,
//       description: newMeal.description,
//       price: parseFloat(newMeal.price),
//     };

//     setMeals((prevMeals) => [...prevMeals, newMealData]);
//     setNewMeal({ name: '', description: '', price: '' });
//     setShowAddMealForm(false);
//   };

//   const mealsList = meals.map((meal) => (
//     <MealItem
//       key={meal.id}
//       id={meal.id}
//       name={meal.name}
//       description={meal.description}
//       price={meal.price}
//     />
//   ));

//   return (
//     <section className={classes.meals}>
//       {!authCtx.isLoggedIn && (
//         <Card>
//           <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
//           <form onSubmit={submitHandler} className={classes.authForm}>
//             <div>
//               <label htmlFor="email">Email ID</label>
//               <input type="email" id="email" required ref={emailInputRef} />
//             </div>
//             <div>
//               <label htmlFor="password">Password</label>
//               <input type="password" id="password" required ref={passInputRef} />
//             </div>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <div>
//               <button type="submit">{isLogin ? 'Login' : 'Create Account'}</button>
//               <button type="button" onClick={switchAuthModeHandler}>
//                 {isLogin ? 'Create new account' : 'Login with existing account'}
//               </button>
//             </div>
//           </form>
//         </Card>
//       )}
//       {authCtx.isLoggedIn && (
//         <>
//           <Card>
//             <ul>{mealsList}</ul>
//           </Card>
//           {isAuthorized && (
//             <Card>
//               <button onClick={() => setShowAddMealForm(true)}>Add Meal</button>
//               {showAddMealForm && (
//                 <div className={classes.addMeal}>
//                   <input
//                     type="text"
//                     placeholder="Meal Name"
//                     value={newMeal.name}
//                     onChange={(e) => setNewMeal((prev) => ({ ...prev, name: e.target.value }))}
//                   />
//                   <input
//                     type="text"
//                     placeholder="Description"
//                     value={newMeal.description}
//                     onChange={(e) => setNewMeal((prev) => ({ ...prev, description: e.target.value }))}
//                   />
//                   <input
//                     type="number"
//                     placeholder="Price"
//                     value={newMeal.price}
//                     onChange={(e) => setNewMeal((prev) => ({ ...prev, price: e.target.value }))}
//                   />
//                   <button onClick={addMealHandler}>Add Meal</button>
//                 </div>
//               )}
//             </Card>
//           )}
//         </>
//       )}
//     </section>
//   );
// };

// export default AvailableMeals;

// import React, { useState, useRef, useContext } from 'react';
// import Card from '../UI/Card';
// import MealItem from './MealItem';
// import classes from './AvailableMeals.module.css';
// import CartContext from '../Store/CartContext';

// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A German specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ];

// const AvailableMeals = () => {
//   const [meals, setMeals] = useState(DUMMY_MEALS);
//   const [newMeal, setNewMeal] = useState({ name: '', description: '', price: '' });
//   const [showAddMealForm, setShowAddMealForm] = useState(false);
//   const [isAuthorized, setIsAuthorized] = useState(false);
//   const [email, setEmail] = useState('');

//   const emailInputRef = useRef();
//   const passInputRef = useRef();
//   const [isLogin, setIsLogin] = useState(true);
//   const [error, setError] = useState('');

//   const authCtx = useContext(CartContext);

//   const switchAuthModeHandler = () => {
//     setIsLogin((prevState) => !prevState);
//     setError('');
//   };

//   const submitHandler = async (event) => {
//     event.preventDefault();

//     const email = emailInputRef.current.value;
//     const password = passInputRef.current.value;

//     let url;
//     if (isLogin) {
//       url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBHOfr5Y0xCLDjYWl_a37z5qGXBuNzYSuc';
//     } else {
//       url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBHOfr5Y0xCLDjYWl_a37z5qGXBuNzYSuc';
//     }

//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         body: JSON.stringify({
//           email: email,
//           password: password,
//           returnSecureToken: true,
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         let errorMessage = 'Authentication failed!';
//         if (data && data.error && data.error.message) {
//           errorMessage = data.error.message;
//         }
//         throw new Error(errorMessage);
//       }

//       // authCtx.logInHandler(data.idToken);
//       // authCtx.setIsLoggedIn(true);
//       // setEmail(email);
//       // authCtx.setEmail(email);
//       setIsAuthorized(email === 'sandeep@gmail.com');
//       setError('');
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const addMealHandler = () => {
//     const newMealData = {
//       id: 'm' + (meals.length + 1),
//       name: newMeal.name,
//       description: newMeal.description,
//       price: parseFloat(newMeal.price),
//     };

//     setMeals((prevMeals) => [...prevMeals, newMealData]);
//     setNewMeal({ name: '', description: '', price: '' });
//     setShowAddMealForm(false);
//   };

//   const mealsList = meals.map((meal) => (
//     <MealItem
//       key={meal.id}
//       id={meal.id}
//       name={meal.name}
//       description={meal.description}
//       price={meal.price}
//     />
//   ));

//   return (
//     <section className={classes.meals}>
//       {!authCtx.isLoggedIn && (
//         <Card>
//           <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
//           <form onSubmit={submitHandler} className={classes.authForm}>
//             <div>
//               <label htmlFor="email">Email ID</label>
//               <input type="email" id="email" required ref={emailInputRef} />
//             </div>
//             <div>
//               <label htmlFor="password">Password</label>
//               <input type="password" id="password" required ref={passInputRef} />
//             </div>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <div>
//               <button type="submit">{isLogin ? 'Login' : 'Create Account'}</button>
//               <button type="button" onClick={switchAuthModeHandler}>
//                 {isLogin ? 'Create new account' : 'Login with existing account'}
//               </button>
//             </div>
//           </form>
//         </Card>
//       )}
//       {/* {authCtx.isLoggedIn && ( */}
//         <>
//           <Card>
//             <ul>{mealsList}</ul>
//           </Card>
//           {isAuthorized && (
//             <Card>
//               <button onClick={() => setShowAddMealForm(true)}>Add Meal</button>
//               {showAddMealForm && (
//                 <div className={classes.addMeal}>
//                   <input
//                     type="text"
//                     placeholder="Meal Name"
//                     value={newMeal.name}
//                     onChange={(e) => setNewMeal((prev) => ({ ...prev, name: e.target.value }))}
//                   />
//                   <input
//                     type="text"
//                     placeholder="Description"
//                     value={newMeal.description}
//                     onChange={(e) => setNewMeal((prev) => ({ ...prev, description: e.target.value }))}
//                   />
//                   <input
//                     type="number"
//                     placeholder="Price"
//                     value={newMeal.price}
//                     onChange={(e) => setNewMeal((prev) => ({ ...prev, price: e.target.value }))}
//                   />
//                   <button onClick={addMealHandler}>Add Meal</button>
//                 </div>
//               )}
//             </Card>
//           )}
//         </>
//       {/* )} */}
//     </section>
//   );
// };

// export default AvailableMeals;
