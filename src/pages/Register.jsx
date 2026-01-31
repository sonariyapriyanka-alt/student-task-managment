import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
  return (
    <>
      <div className="form-container">
        {/* page field */}
        <h1 className="form-title">Register</h1>
        <form>
          {/* Name field */}
          <div className="form-group">
            <label htmlfor="name">Full Name</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
            />
          </div>
          {/*phone number field*/}
          <div className="form-group">
            <label htmlfor="phone">phone number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
            />
          </div>
          {/*Password field*/}
          <div className="form-group">
            <label htmlfor="Password">Password</label>
            <input
              type="Password"
              id="Password"
              name="Password"
              placeholder="Creat a Password"
            />
          </div>

          {/*Submit Button*/}
          <button type="submit" className="btn-primary">
            Register
          </button>
        </form>
        {/* */}
      </div>
    </>
  );
};

export default Register;
