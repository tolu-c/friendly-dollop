import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

function Checkout(props) {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameRef = useRef();
  const streetRef = useRef();
  const postalCodeRef = useRef();
  const cityRef = useRef();

  // form submit function
  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredPostalCode = postalCodeRef.current.value;
    const enteredCity = cityRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredCityIsValid &&
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    // submit form values
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
  };

  // TODO: style form for invalid state
  return (
    <form
      onSubmit={confirmHandler}
      className="w-full border-amber-200 border-t flex flex-col items-center space-y-3 overflow-y-scroll h-52"
    >
      <div className="w-5/6 flex space-x-2 items-center flex-start mt-2">
        <label
          htmlFor="name"
          className="capitalize text-lg font-medium text-slate-600 basis-2/6"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          ref={nameRef}
          className="basis-4/6 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-base font-sans text-slate-700"
        />
        {!formValidity.name && <p className="basis-6/6">enter a valid name!</p>}
      </div>

      <div className="w-5/6 flex space-x-2 items-center flex-start mt-2">
        <label
          htmlFor="street"
          className="capitalize text-lg font-medium text-slate-600 basis-2/6"
        >
          street
        </label>
        <input
          type="text"
          id="street"
          ref={streetRef}
          className="grow focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-base font-sans text-slate-700 basis-4/6"
        />
        {!formValidity.street && (
          <p className="basis-6/6">enter a valid street!</p>
        )}
      </div>

      <div className="w-5/6 flex space-x-2 items-center flex-start mt-2">
        <label
          htmlFor="postalCode"
          className="capitalize text-lg font-medium text-slate-600 basis-2/6"
        >
          postal Code
        </label>
        <input
          type="text"
          id="postalCode"
          ref={postalCodeRef}
          className="grow focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-base font-sans text-slate-700 basis-4/6"
        />
        {!formValidity.postalCode && (
          <p className="basis-6/6">enter a valid postal code!</p>
        )}
      </div>

      <div className="w-5/6 flex space-x-2 items-center flex-start mt-2">
        <label
          htmlFor="city"
          className="capitalize text-lg font-medium text-slate-600 basis-2/6"
        >
          city
        </label>
        <input
          type="text"
          ref={cityRef}
          id="city"
          className="grow focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-base font-sans text-slate-700 basis-4/6"
        />
        {!formValidity.city && <p className="basis-6/6">enter a valid city!</p>}
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
