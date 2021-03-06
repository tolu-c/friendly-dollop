import { useEffect, useState } from "react";
import Card from "../ui/Card";
import MealItem from "./MealItem/MealItem";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-17f19-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

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
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <p className="text-white text-xl text-center font-sans">
        Fetching your meals.
      </p>
    );
  }

  if (httpError) {
    return (
      <p className="text-red-700 text-xl text-center font-sans">{httpError}</p>
    );
  }

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
