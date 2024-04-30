import React from "react";
import "./registration.scss";
import { Formik } from "formik";
import { SignupSchema } from "../utils";

function Registration() {
  const handleOnSubmit = (values, actions) => {
    console.log(values, actions);
    alert(JSON.stringify(values));
  };

  const initialFromValues = {
    name: "",
    email: "",
    password: "",
    gender: "",
    language: "",
    address: "",
  };
  return (
    <div className="r-wrap">
      <div className="inner">
        <h5>REGISTRATION</h5>
        <Formik
          initialValues={initialFromValues}
          validationSchema={SignupSchema}
          onSubmit={handleOnSubmit}
          validateOnMount
        >
          {(FormikProps) => {
            const {
              touched,
              errors,
              isValid,
              handleChange,
              handleBlur,
              handleSubmit,
            } = FormikProps;
            return (
              <form onSubmit={handleSubmit} autoComplete="off">
                <div
                  className={`field ${
                    errors.name && touched.name ? "invalid" : ""
                  }`}
                >
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter name"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name && (
                    <p className="error-message">{errors.name}</p>
                  )}
                </div>
                <div
                  className={`field ${
                    errors.email && touched.email ? "invalid" : ""
                  }`}
                >
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <p className="error-message">{errors.email}</p>
                  )}
                </div>
                <div
                  className={`field ${
                    errors.password && touched.password ? "invalid" : ""
                  }`}
                >
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && (
                    <p className="error-message">{errors.password}</p>
                  )}
                </div>
                <div
                  className={`field radio ${
                    errors.gender && touched.gender ? "invalid" : ""
                  }`}
                >
                  <p>Gender</p>
                  <label htmlFor="male">
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value="Male"
                    />{" "}
                    Male
                  </label>
                  <label htmlFor="female">
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value="Female"
                    />{" "}
                    Female
                  </label>
                  {errors.gender && touched.gender && (
                    <p className="error-message">{errors.gender}</p>
                  )}
                </div>
                <div
                  className={`field select ${
                    errors.language && touched.language ? "invalid" : ""
                  }`}
                >
                  <label htmlFor="language">Language</label>
                  <select
                    name="language"
                    id="language"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option>Choose Language</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Spanish">Spanish</option>
                  </select>
                  {errors.language && touched.language && (
                    <p className="error-message">{errors.language}</p>
                  )}
                </div>
                <div
                  className={`field ${
                    errors.address && touched.address ? "invalid" : ""
                  }`}
                >
                  <label htmlFor="address">Address</label>
                  <textarea
                    type="textarea"
                    rows="4"
                    name="address"
                    id="address"
                    placeholder="Enter address"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.address && touched.address && (
                    <p className="error-message">{errors.address}</p>
                  )}
                </div>
                <button
                  disabled={!isValid}
                  type="submit"
                  className={isValid ? "" : "--disabled"}
                >
                  Sign up {isValid}
                </button>
              </form>
            );
          }}
        </Formik>

        <div className="btm-block">
          Already have a account ? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Registration;
