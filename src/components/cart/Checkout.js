import React from "react";

function Checkout(props) {
  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={confirmHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>

      <div>
        <label htmlFor="street">street</label>
        <input type="text" id="street" />
      </div>

      <div>
        <label htmlFor="postalCode">postal Code</label>
        <input type="text" id="postalCode" />
      </div>

      <div>
        <label htmlFor="city">city</label>
        <input type="text" id="city" />
      </div>

      <button type="button" onClick={props.onCancel}>
        cancel
      </button>
      <br />
      <button>confirm</button>
    </form>
  );
}

export default Checkout;
