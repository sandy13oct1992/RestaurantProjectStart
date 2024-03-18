// Importing necessary components and libraries from 'react' and 'react-dom'
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

// Importing CSS classes for styling
import classes from './Modal.module.css';

// Component for the backdrop (overlay behind the modal)
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

// Component for the modal overlay
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

// Finding the DOM element with the ID 'overlays' for creating a portal
const portalElement = document.getElementById('overlays');

// Main 'Modal' component
const Modal = (props) => {
  return (
    // Using a 'Fragment' to group multiple components without creating an additional DOM element
    <Fragment>
      {/* Creating a portal for the 'Backdrop' component */}
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {/* Creating a portal for the 'ModalOverlay' component */}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

// Exporting the 'Modal' component for use in other parts of the application
export default Modal;