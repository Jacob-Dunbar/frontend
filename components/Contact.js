import React from "react";

function Contact() {
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
    <form method="post" onSubmit={handleSubmit}>
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
      <p>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default Contact;
