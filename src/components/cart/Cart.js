import { useContext, useState } from "react";
import { XIcon } from "@heroicons/react/solid";
import Modal from "../ui/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const cartItems = (
    <ul className="text-left flex flex-col gap-4 overflow-y-scroll max-h-80">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className="flex items-center justify-between">
        <span className="font-bold text-xl text-gray-600">Total Amount</span>
        <span className="font-bold text-2xl text-gray-800">{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onHideCart} />}
      <div className="">
        {/* <button>close</button> */}
        <XIcon
          className="h-4 w-4 absolute top-2 right-2 text-red-500 cursor-pointer"
          onClick={props.onHideCart}
        />
        {!isCheckout && hasItems && (
          <button
            onClick={orderHandler}
            className="w-5/6 text-center bg-orange-700 text-white capitalize text-lg font-medium py-1"
          >
            order
          </button>
        )}
      </div>
    </Modal>
  );
}

export default Cart;
