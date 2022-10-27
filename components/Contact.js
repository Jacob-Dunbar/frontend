import React from "react";
import css from "../styles/contact.module.scss";

function Contact(props) {
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {};
    const elementArray = Array.from(e.target.elements);
    elementArray.forEach((field) => {
      if (!field.name) {
        return;
      } else {
        formData[field.name] = field.value;
      }
    });

    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    });

    console.log(formData);
  }

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
          <input type="text" name="name" />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </p>
        <p>
          <label htmlFor="message">Message</label>
          <textarea name="message" />
        </p>
        <p className={css.button_container}>
          <button>Send Message</button>
        </p>
      </form>
    </div>
  );
}

export default Contact;
