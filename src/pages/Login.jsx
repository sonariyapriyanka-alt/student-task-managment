import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    
      <div className="form-container">
        {/* page title */}
        <h1 className="form-title">Welcome Back</h1>
        <form>
          {/* Email field */}
          <div className="form-group">
            <label htmlfor="name">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
            />
          </div>
          {/*password field*/}
          <div className="form-group">
            <label htmlfor="password">password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>

          {/*Submit Button*/}
          <button type="submit" className="btn-primary">
           Login
          </button>
        </form>
        
      </div>
  );
};

export default Login;
