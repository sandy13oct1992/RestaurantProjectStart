import MealItem from "./MealItem";
const DummyMeals = [
    {
        id: "h",
        name: 'lavkush',
        description:'Halwa',
        price: 25,   
    },
    {
        id:'p',
        name: 'sandy',
        description: 'Puri',
        price: 30,
    },
    {
        id:'k',
        name: 'lav',
        description: 'Kheer',
        price: 35,
    },
    {
        id:'c',
        name: 'kush',
        description: 'Chainees',
        price: 40,
    },
];
const AvailableMeals = () => {
    const MealList = DummyMeals.map(meal => 
    <MealItem 
    key={meal.id} 
    name={meal.name} 
    description={meal.description} 
    price={meal.price}
    />);
    return <section>
        <ul>
            {MealList}
        </ul>
    </section>
 
}
export default AvailableMeals;