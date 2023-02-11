import React from "react";
import ReactDom from "react-dom";

import Social from "../header/Social";
import classes from "./Contact.module.scss";

const Contact = ({ onClose }) => { 
  return ReactDom.createPortal(
    <>
      <div className={`${classes.contact__container}`} id="contact">
        <button
          className={`${classes.btn__close_modal}`}
          onClick={() => onClose(false)}
        >
          <i className="bi bi-x-lg"></i>
        </button>
        <div className={`${classes.contact__form}`}>
          <div className={`${classes.contact__form_container}`}>
            <form action="#">
              <h1>Contact Me</h1>
              <Social />
              <span>Fill out the form below</span>

              <input type="text" placeholder="Name" />

              <input type="email" placeholder="Email" />

              <textarea
                name="text"
                type="textarea"
                placeholder="Comment"
              ></textarea>

              <button
                type="submit"
                className={`${classes.contact__send}`}
                onClick={() => onClose(false)}
              >
                Send
              </button>
            </form>
          </div>

          <div className={`${classes.contact__form_sub}`}>
            <div className={`${classes.contact__form_sub_info}`}>
              <div>
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with me</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.overlay} onClick={() => onClose(false)}></div>
    </>,
    document.getElementById("portal")
  );
};

export default Contact;
