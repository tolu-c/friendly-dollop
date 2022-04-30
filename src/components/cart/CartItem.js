import { PlusIcon, MinusIcon } from "@heroicons/react/solid";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="flex justify-between p-1 w-full items-center border-b-2 border-orange-300/60 shadow-sm overscroll-scroll">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-medium text-gray-700 capitalize">
          {props.name}
        </h2>
        <div className="flex gap-2 text-base font-bold">
          <span className="text-orange-600">{price}</span>
          <span className="text-gray-500">x {props.amount}</span>
        </div>
      </div>
      <div className="flex gap-3">
        <MinusIcon
          className="h-4 w-4 text-red-700 cursor-pointer"
          onClick={props.onRemove}
        />
        <PlusIcon
          className="h-4 w-4 text-green-700 cursor-pointer"
          onClick={props.onAdd}
        />
      </div>
    </li>
  );
};

export default CartItem;
