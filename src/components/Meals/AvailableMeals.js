import React from "react";
import Card from "../UI/Card";
import styles from "./AvialableMeals.module.css";
import MealsItem from "./MealItem/MealsItem";

const Dummy_meals = [
  {
    id: "f1",
    name: "Kacchi biriyani",
    description: "Delicious and tradition bengali food",
    price: 6.67,
  },
  {
    id: "f2",
    name: "Virgin Mojito",
    description: "Delicious and Healthy Drink",
    price: 2.99,
  },
  {
    id: "f3",
    name: "Kichuri With Mutton",
    description: "old and tradition bengali food",
    price: 8.67,
  },
  {
    id: "f4",
    name: "Green Bowl",
    description: "Healthy and green",
    price: 16.67,
  },
  {
    id: "f5",
    name: "Berbecue Burger",
    description: "Amercan, raw,meaty",
    price: 11.67,
  },
];

const AvailableMeals = () => {
  const mealsList = Dummy_meals.map((meal) => {
    return (
      <MealsItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
