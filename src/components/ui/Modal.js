import ReactDOM from "react-dom";
import { Fragment } from "react";

const Backdrop = (props) => {
  return <div className="bg-black/20 h-screen fixed w-full" />;
};

const ModalOverLay = (props) => {
  return (
    <div className="relative top-10 mx-auto z-50 bg-white w-5/6  p-2 rounded-md shadow-lg">
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
