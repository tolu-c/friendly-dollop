import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex items-center gap-1">
      <label htmlFor={props.input.id} className="text-gray-600 font-medium">
        {props.label}
      </label>
      <input {...props.input} ref={ref} />
    </div>
  );
})

export default Input;
