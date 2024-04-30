import React from "react";
import "./registration.scss";
export function Login() {
  const ownSubmitHandler = (values) => {
    console.log(values);
  };
  const handleOnChange = (fieldName, fieldValue) => {};
  <div className="r-wrap">
    <div className="inner">
      <h5>REGISTRATION</h5>

      <form onSubmit={ownSubmitHandler} autoComplete="off">
        <div className={`field ${false ? "invalid" : ""}`}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={handleOnChange}
          />
          {false && <p className="error-message">{}</p>}
        </div>
        <div className={`field ${false ? "invalid" : ""}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={handleOnChange}
          />
          {false && <p className="error-message">{}</p>}
        </div>

        <button type="submit">Log In</button>
      </form>

      <div className="btm-block">
        Already have a account ? <a href="/login">Login</a>
      </div>
    </div>
  </div>;
}
