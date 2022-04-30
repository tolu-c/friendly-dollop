import { useContext } from "react";
import CartIcon from "../cart/CartIcon";
import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const numberOfCartItem = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  }, 0)

  return (
    <button
      className="flex items-center space-x-3 cursor-pointer"
      onClick={props.onClick}
    >
      <div className="relative">
        <CartIcon />
        <span className="absolute -top-0.5 -right-1 h-4 w-4 rounded-full bg-orange-200 text-orange-700 flex items-center justify-center font-bold text-sm">
          {numberOfCartItem}
        </span>
      </div>
      <span className="text-sm">Your Cart</span>
    </button>
  );
}

export default HeaderCartButton;
