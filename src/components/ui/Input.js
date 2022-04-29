function Input(props) {
  return (
    <div className="flex items-center gap-1">
      <label htmlFor={props.input.id} className="text-gray-600 font-medium">
        {props.label}
      </label>
      <input {...props.input} />
    </div>
  );
}

export default Input;
