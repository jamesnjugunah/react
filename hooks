import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";

function MyForm() {
  const [inputs , setInputs] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
  return (
    <form onSubmit = {handleSubmit}>
      <label>
        Enter Your Name:
        <input type="text" onChange={handleChange} value = {inputs.username || ""} />
      </label>
      <label>
        Enter Your Email:
        <input type="text" onChange={handleChange} value={inputs.Email || ""} />
      </label>
      <button type="submit" >Submit</button>
    </form>
  );
}
ReactDOM.render(<MyForm />, document.getElementById('root'));
export default MyForm;
