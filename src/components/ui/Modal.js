import ReactDOM from "react-dom";
import { Fragment } from "react";

const Backdrop = (props) => {
  return (
    <div
      className="bg-black/20 h-screen fixed w-full cursor-pointer"
      onClick={props.onHideCart}
    />
  );
};

const ModalOverLay = (props) => {
  return (
    <div className="absolute top-10 left-14 z-50 bg-white w-5/6  p-2 h-auto rounded-md shadow-lg animate-show">
      <div className="flex flex-col gap-2 justify-center w-full text-center">
        {props.children}
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
