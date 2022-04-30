import { useContext, useEffect, useState } from "react";
import CartIcon from "../cart/CartIcon";
import CartContext from "../../store/cart-context";

function HeaderCartButton(props) {
  const [btnIsBumped, setBtnIsBumped] = useState(false);

  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItem = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const animateBump = "animate-bump";

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsBumped(true);

    const timer = setTimeout(() => {
      setBtnIsBumped(false);
    }, 300);

    return () => {
      clearTimeout(timer)
    }
  }, [items]);

  return (
    <button
      className={`flex items-center space-x-3 cursor-pointer ${
        btnIsBumped ? animateBump : ""
      }`}
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
