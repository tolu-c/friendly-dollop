import { XIcon } from "@heroicons/react/solid";
import Modal from "../ui/Modal";

function Cart(props) {
  const cartItems = (
    <ul className="">
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className="">
        <span className="">Total Amount</span>
        <span>35.62</span>
      </div>
      <div className="">
        {/* <button>close</button> */}
        <XIcon
          className="h-4 w-4 absolute top-2 right-2 text-red-500 cursor-pointer"
          onClick={props.onHideCart}
        />
        <button className="">order</button>
      </div>
    </Modal>
  );
}

export default Cart;
