import { useState } from "react";
import css from "../styles/contact.module.scss";

function Contact(props) {
  //form data object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  //field validation states
  const [nameVal, setNameVal] = useState(true);
  const [messageVal, setMessageVal] = useState(true);
  const [emailVal, setEmailVal] = useState(true);

  // handle submit - check fields are not empty and that corresponding state is true
  // if any empty fields set corresponding state to false
  // if all good post to mail api
  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !nameVal) {
      setNameVal(false);
    } else if (!formData.email || !emailVal) {
      setEmailVal(false);
    } else if (!formData.message || !messageVal) {
      setMessageVal(false);
    } else if (
      formData.name &&
      formData.email &&
      formData.message &&
      nameVal &&
      emailVal &&
      messageVal
    ) {
      fetch("/api/mail", {
        method: "post",
        body: JSON.stringify(formData),
      });
      console.log("sent");
    }
  }

  //handle change
  //spread prev formData and over write current target data
  //use [] to allow dynamic string to be used as key
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
    // set validation state to true if value truthy.
    if (event.target.name === "name" && event.target.value) {
      setNameVal(true);
    } else if (event.target.name === "message" && event.target.value) {
      setMessageVal(true);
    } else if (event.target.name == "email" && event.target.value) {
      setEmailVal(true);
    }
  }

  //check field functions - all fields for contents and check email for @
  function checkNameField(event) {
    if (!event.target.value) {
      setNameVal(false);
    } else {
      setNameVal(true);
    }
  }

  function checkMessageField(event) {
    if (!event.target.value) {
      setMessageVal(false);
    } else {
      setMessageVal(true);
    }
  }

  function checkEmail(event) {
    if (!event.target.value.includes("@")) {
      setEmailVal(false);
    } else {
      setEmailVal(true);
    }
  }

  //remember to control inputs so formData state drives the input state and they stay insync. value={formData.input}
  return (
    <div className={css.form_container}>
      <h1 className={props.darkMode ? css.heading_dark : css.heading_light}>
        Contact
      </h1>
      <form
        className={props.darkMode ? css.form_dark : css.form_light}
        method="post"
        onSubmit={handleSubmit}
      >
        <p>
          <label htmlFor="name">Name</label>
          <input
            className={!nameVal ? css.field_err : undefined}
            onChange={handleChange}
            type="text"
            name="name"
            value={formData.name}
            onBlur={checkNameField}
          />
        </p>
        <p className={css.err_text}>{!nameVal && "Introduce yourself"}</p>
        <p>
          <label htmlFor="email">Email</label>
          <input
            className={!emailVal ? css.field_err : undefined}
            onChange={handleChange}
            type="email"
            name="email"
            value={formData.email}
            onBlur={checkEmail}
          />
        </p>
        <p className={css.err_text}>
          {!emailVal && "Thats not a valid email address!"}
        </p>
        <p>
          <label htmlFor="message">Message</label>
          <textarea
            className={!messageVal ? css.field_err : undefined}
            onChange={handleChange}
            name="message"
            value={formData.message}
            onBlur={checkMessageField}
          />
        </p>
        <p className={css.err_text}>{!messageVal && "Don't be shy!"}</p>
        <p className={css.button_container}>
          <button>Send Message</button>
        </p>
      </form>
    </div>
  );
}

export default Contact;
