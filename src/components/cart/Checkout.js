import React from "react";

function Checkout(props) {
  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={confirmHandler}
      className="w-full border-amber-200 border-t flex flex-col items-center space-y-3 overflow-y-scroll"
    >
      <div className="w-5/6 flex space-x-2 items-center mt-2">
        <label
          htmlFor="name"
          className="capitalize text-lg font-medium text-slate-600"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="grow focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-base font-sans text-slate-700"
        />
      </div>

      <div className="w-5/6 flex space-x-2 items-center mt-2">
        <label
          htmlFor="street"
          className="capitalize text-lg font-medium text-slate-600"
        >
          street
        </label>
        <input
          type="text"
          id="street"
          className="grow focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-base font-sans text-slate-700"
        />
      </div>

      <div className="w-5/6 flex space-x-2 items-center mt-2">
        <label
          htmlFor="postalCode"
          className="capitalize text-lg font-medium text-slate-600"
        >
          postal Code
        </label>
        <input
          type="text"
          id="postalCode"
          className="grow focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-base font-sans text-slate-700"
        />
      </div>

      <div className="w-5/6 flex space-x-2 items-center mt-2">
        <label
          htmlFor="city"
          className="capitalize text-lg font-medium text-slate-600"
        >
          city
        </label>
        <input
          type="text"
          id="city"
          className="grow focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-base font-sans text-slate-700"
        />
      </div>

      <div className="w-full grid grid-cols-2 gap-x-4">
        <button
          type="button"
          onClick={props.onCancel}
          className="w-full bg-red-700 text-white capitalize text-base py-2 text-center hover:bg-red-900 cursor-pointer"
        >
          cancel
        </button>
        <button className="w-full bg-teal-700 text-white capitalize text-base py-2 text-center hover:bg-teal-900 cursor-pointer">
          confirm
        </button>
      </div>
    </form>
  );
}

export default Checkout;
