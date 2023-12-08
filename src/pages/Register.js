import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

function Register() {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPasword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let regobj = (id, email, fullname, password);

    fetch("http://localhost:8000/user", {
      metod: "GET",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(regobj)
    })
      .then((res) => {
        toast.success("Registered successfully.");
      })
      .catch((err) => {
        toast.error("Failed :" + err.message);
      });
  }

  return (
    <div className="Register">
      <div className="container pt-5 ">
        <div className="row mt-5">
          <div className="col"></div>
          <div className="col my-5  bg-dark  text-light p-5 ">
            <h1 className=" border-bottom  border-light  pb-2">Registration</h1>
            <form onClick={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  First name
                </label>
                <input
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Full name
                </label>
                <input
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPasword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 ">
                Submit
              </button>
            </form>
          </div>
          <div className="col  "></div>
        </div>
      </div>
    </div>
  );
}

export default Register;
