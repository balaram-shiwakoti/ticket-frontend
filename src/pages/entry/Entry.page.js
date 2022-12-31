import React, { useState } from "react";
import { ResetPassword } from "../../components/Forget/PasswordReset.comp";
import { Login } from "../../components/login/Login.comp";
import "./entry.style.css";
export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    // console.log(name);
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setpassword(value);
        break;
      default:
        break;
    }
    // Todo call api to submit the form
    // console.log(name, value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Fill up all fields ");
    }
    console.log(email, password);
  };
  const formSwitcher = (formType) => {
    console.log(formType);
    setFormLoad(formType);
  };
  const handleResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Fill up all fields ");
    }
    console.log(email);
  };

  return (
    <div className="entry-page bg-info">
      <div className="jumbotron form-box">
        {formLoad === "login" && (
          <Login
            handleOnchange={handleOnchange}
            email={email}
            formSwitcher={formSwitcher}
            handleSubmit={handleSubmit}
            password={password}
            setFormLoad={setFormLoad}
          />
        )}

        {formLoad === "reset" && (
          <ResetPassword
            formSwitcher={formSwitcher}
            handleOnchange={handleOnchange}
            handleResetSubmit={handleResetSubmit}
            email={email}
          />
        )}
      </div>
    </div>
  );
};
