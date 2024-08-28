import React from "react";
import { useState } from "react";
import classes from "./OrderForm.module.css"; // Assuming you have a CSS module for styling
import CartItem from "./CartItem";

const OrderForm = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isCod, setIsCod] = useState(false);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setPhone(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // Process the form data (e.g., send it to the server)
    console.log({ name, phone, email, address });
    // Reset the form fields
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
    // Show the modal after form submission
    setShowModal(true);
  };

  const purchaseHandler = () => {
    // Process the purchase (e.g., send data to the server)
    console.log("Purchase completed!");
    // Close the modal
    setShowModal(false);
    // Close the form
    props.onClose();
  };

  return (
    <>
      {showModal && (
        <>
          <div className={classes.backdrop} onClick={() => setShowModal(false)}></div>
          <div className={classes.modal}>
            <h2>Order Summary</h2>
            <p>Your order is confirmed</p>
            {/* <p>Selected Product: {props.productName}</p> */}
            {/* <p>Price: ${props.productPrice.toFixed(2)}</p>
            <p>Total Bill Amount: ${(props.productPrice).toFixed(2)}</p> */}
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={isCod}
                  onChange={(e) => setIsCod(e.target.checked)}
                />
                Cash on Delivery (C.O.D.)
              </label>
            </div>
            <button onClick={purchaseHandler}>Purchase</button>
          </div>
        </>
      )}
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={nameChangeHandler} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" value={phone} onChange={phoneChangeHandler} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={emailChangeHandler} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" value={address} onChange={addressChangeHandler} required />
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={props.onClose}>Cancel</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default OrderForm;
