import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const SignUp = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4" id="fonts">
      <div className="col-12 col-lg-10" style={{ paddingTop: "5rem", width: "50rem" }}>
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2" id="fonts">
            Sign Up
          </h4>
          <div className="card-body">
            {data ? (
              <p>
                <Link to="/">Back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button className="btn btn-block btn-danger" style={{ cursor: "pointer" }} type="submit" id="fonts">
                  Submit
                </button>
              </form>
            )}

            {error && <div className="my-3 p-3 bg-danger text-white">{error.message}</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;