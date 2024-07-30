import React, { useRef } from "react";
import "./form.scss";

function Form() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = () => {
    console.log({
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    });
  };

  return (
    <div className="form">
      <label>
        Name
        <input ref={nameRef} type="text" placeholder="Enter your full name" />
      </label>
      <label>
        Email
        <input ref={emailRef} type="text" />
      </label>
      <label>
        Message
        <textarea ref={messageRef} />
      </label>

      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default Form;
