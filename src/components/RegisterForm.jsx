import React from "react";
import { useState } from "react";
import "./style.css";
import myimage from "../assets/signupimg.png";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [values, Setvalues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    registerbox: false,
  });
  const [errors, Seterror] = useState({
    name: null,
    username: null,
    email: null,
    phone: null,
    registerbox: null,
  });

  const handleSubmit = () => {
    let isError = false;
    if (values.name.trim().length === 0) {
      Seterror((prev) => ({ ...prev, name: "Name is required" }));
      isError = true;
    } else {
      Seterror((prev) => ({ ...prev, name: null }));
    }

    if (values.username.trim().length === 0) {
      Seterror((prev) => ({ ...prev, username: "Username is required" }));
      isError = true;
    } else {
      Seterror((prev) => ({ ...prev, username: null }));
    }

    if (values.email.trim().length === 0) {
      Seterror((prev) => ({ ...prev, email: "Email is required" }));
      isError = true;
    } else {
      Seterror((prev) => ({ ...prev, email: null }));
    }

    if (values.mobile.trim().length === 0) {
      Seterror((prev) => ({ ...prev, mobile: "Mobile is required" }));
      isError = true;
    } else {
      Seterror((prev) => ({ ...prev, mobile: null }));
    }

    if (values.registerbox === false) {
      Seterror((prev) => ({ ...prev, registerbox: "Please check the box" }));
      isError = true;
    } else {
      Seterror((prev) => ({ ...prev, registerbox: null }));
    }

    if (isError) {
      return;
    } else {
      window.localStorage.setItem("userInfo", JSON.stringify(values));
      navigate("/info");
    }
  };

  return (
    <div className="container">
      <div className="childleft">
        <img src={myimage} alt="Signup" />
        <h2>Discover new things on Superapp</h2>
      </div>
      <div className="childright">
        <div className="childrightinner">
          <h1>Super app</h1>
          <h4>Create your new account</h4>
          <form>
            {/* Your form inputs go here */}
            <input
  value={values.name}
  onChange={(e) => {
    Setvalues((prev) => {
      return { ...prev, name: e.target.value };
    });
  }}
  type="text"
  placeholder="Name"
/>
<p>{errors.name}</p>

<input
  onChange={(e) => {
    Setvalues((prev) => {
      return { ...prev, username: e.target.value };
    });
  }}
  value={values.username}
  type="text"
  placeholder="Username"
/>
<p>{errors.username}</p>

<input
  onChange={(e) => {
    Setvalues((prev) => {
      return { ...prev, email: e.target.value };
    });
  }}
  value={values.email}
  type="text"
  placeholder="Email"
/>
<p>{errors.email}</p>

<input
  onChange={(e) => {
    Setvalues((prev) => {
      return { ...prev, mobile: e.target.value };
    });
  }}
  value={values.mobile}
  type="text"
  placeholder="Mobile"
/>
<p>{errors.mobile}</p>

          </form>
 <div className="checkbox">
            {/* Your checkbox input and label go here */}
 <input
    checked={values.registerbox}
    id="registerbox"
    type="checkbox"
    name="registerbox"
    
    onChange={(e) => {
      Setvalues((prev) => {
        return { ...prev, registerbox: e.target.checked };
      });
    }}
  />
  <p> Share my registration data with Superapp</p>
 <br/>
  <p style={{color:"red"}}>{errors.registerbox}</p>
</div>
          <button onClick={handleSubmit}>Sign Up</button>
          <div className="spantag">
          <p>
            By clicking on Sign up. you agree to Superapp
            <span className="spanset">Terms and Conditions of Use</span>
          </p>

          <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp
            <span className="spanset">Privacy Policy</span>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
