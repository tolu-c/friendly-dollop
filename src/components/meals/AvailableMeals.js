import { useEffect, useState } from "react";
import Card from "../ui/Card";
import MealItem from "./MealItem/MealItem";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-17f19-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals)
    };

    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      id={meal.id}
    />
  ));

  return (
    <section className="w-[90%] max-w-2xl my-8 mx-auto animate-meals">
      <Card>
        <ul className="m-0 p-0 list-none">{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
