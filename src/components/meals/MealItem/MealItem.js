import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

function MealItem(props) {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className="border-b border-orange-200 p-1 pt-4 flex justify-between">
      <div className="flex flex-col gap-1 items-start">
        <h3 className="font-bold text-gray-600 text-2xl">{props.name}</h3>
        <div className="">{props.description}</div>
        <div className="text-orange-800 font-black text-base ">{price}</div>
      </div>

      <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
    </li>
  );
}

export default MealItem;
