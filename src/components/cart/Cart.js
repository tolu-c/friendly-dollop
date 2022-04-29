import { XIcon } from '@heroicons/react/solid'

function Cart(props) {
  const cartItems = (
    <ul className="">
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      cart items
      <div className="">
        <span className=''>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className="">
        {/* <button>close</button> */}
        <XIcon className='h-4 w-4' />
        <button className=''>order</button>
      </div>
    </div>
  );
}

export default Cart;
