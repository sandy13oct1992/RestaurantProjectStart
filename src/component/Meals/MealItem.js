
const MealItem = (props) =>{
    
 return(
    <li>
        <div>
           <h3>{props.name}</h3> 
           <div>{props.description}</div>
           <div>${props.price.toFixed(2)}</div>

            
        </div>
    </li>
 )


}
export default MealItem;