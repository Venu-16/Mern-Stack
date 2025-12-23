import React, { useState } from "react";

function MyForm() {
  // State to store form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (!formData.name || !formData.email) {
      alert("Name and Email are required!");
      return;
    }
    console.log("Form submitted:", formData);
    alert(`Hello ${formData.name}, your form has been submitted!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Age:{" "}
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="1"
          />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
