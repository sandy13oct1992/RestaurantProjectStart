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
];
const AvailableMeals = () => {
    const MealList = DummyMeals.map(meal => <li>{meal.name}</li>);
    return <section>
        <ul>
            {MealList}
        </ul>
    </section>
 
}
export default AvailableMeals;