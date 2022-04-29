function Card(props) {
  return <div className='bg-white rounded-md border shadow-lg text-gray-700 p-4 w-full'>{props.children}</div>;
}

export default Card;
