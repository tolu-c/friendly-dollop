import CartIcon from "../cart/CartIcon";

function HeaderCartButton(props) {
  return (
    <button className='flex items-center space-x-3 cursor-pointer'>
      <div className="relative">
        <CartIcon />
        <span className='absolute -top-0.5 -right-1 h-4 w-4 rounded-full bg-orange-200 text-orange-700 flex items-center justify-center font-bold text-sm'>3</span>
      </div>
      <span className='text-sm'>Your Cart</span>
    </button>
  );
}

export default HeaderCartButton;
