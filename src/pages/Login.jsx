import React, { useState } from "react";
import "./registration.scss";
import { validationRegex } from "../utils";
export function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({ isValid: false });
  const ownSubmitHandler = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
  };

  const handleOnChange = (fieldName, fieldValue) => {
    switch (fieldName) {
      case "email":
        if (fieldValue.trim() !== "") {
          setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue,
          }));
          setFormErrors((prevState) => ({
            ...prevState,
            [fieldName]: null,
            isValid: true,
          }));
        } else {
          setFormErrors((prevState) => ({
            ...prevState,
            [fieldName]: "Enter email id",
            isValid: false,
          }));
        }

        break;
      case "password":
        if (fieldValue.trim() !== "") {
          setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue,
          }));
          setFormErrors((prevState) => ({
            ...prevState,
            [fieldName]: null,
            isValid: true,
          }));
        } else {
          setFormErrors((prevState) => ({
            ...prevState,
            [fieldName]: "Enter password ",
            isValid: false,
          }));
        }
      default:
        break;
    }
  };
  return (
    <div className="r-wrap">
      <div className="inner">
        <h5>Login</h5>

        <form onSubmit={ownSubmitHandler} autoComplete="off">
          <div className={`field ${formErrors?.email ? "invalid" : ""}`}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={(e) => handleOnChange("email", e.target.value)}
              required
            />
            {formErrors?.email && (
              <p className="error-message">{formErrors?.email}</p>
            )}
          </div>
          <div className={`field ${formErrors?.password ? "invalid" : ""}`}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              required
              onChange={(e) => handleOnChange("password", e.target.value)}
            />
            {formErrors?.password && (
              <p className="error-message">{formErrors?.password}</p>
            )}
          </div>

          <button
            type="submit"
            className={formErrors.isValid ? "" : "--disabled"}
          >
            Log In
          </button>
        </form>

        <div className="btm-block">
          Already don't have a account ? <a href="/login">SignUp</a>
        </div>
      </div>
    </div>
  );
}
