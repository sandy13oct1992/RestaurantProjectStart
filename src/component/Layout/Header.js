import { Fragment } from "react";
import MealsImage from './Meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
 return <Fragment>
    <header>
     <h1>react Meals</h1>
     <HeaderCartButton/>
    </header>
    <div>
      <img src={MealsImage} alt="A Table full of delicious food" />
    </div>
 </Fragment>
}

export default Header;