import React, { useState } from "react";
import axios from "axios";
import "./Formcss.css";

function Form() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/contact",
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log("Response:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-auto bg-base-100 z-0">
      <div className="card w-full max-w-lg shadow-xl bg-base-200 p-6  flex-row z-0">
        <form onSubmit={handleSubmit} className="space-y-4 pl-4 pt-4 z-0">
          <div className="flex gap-4">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="input input-bordered input-primary w-full bg-base-200 text-base-content"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="input input-bordered input-primary w-full bg-base-200 text-base-content"
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered input-secondary w-full bg-base-200 text-base-content"
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phonenumber"
            placeholder="Contact Number"
            className="input input-bordered input-accent w-full bg-base-200 text-base-content"
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="textarea textarea-bordered w-full bg-base-200 text-base-content"
            rows="3"
            onChange={handleChange}
            required
          ></textarea>
           <button type="submit content-center submitbtn">
            <span className="circle1"></span>
            <span className="circle2"></span>
            <span className="circle3"></span>
            <span className="circle4"></span>
            <span className="circle5"></span>
            <span className="text">Get in touch</span>
          </button>
        </form>
      </div>
    </div>
  );
}


export default Form;
