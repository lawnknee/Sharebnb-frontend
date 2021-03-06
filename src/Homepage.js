import "./Homepage.css";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { useContext } from "react";

/** Renders the homepage of Sharebnb.
 *
 *  If a user is logged in, shows a welcome message.
 *  If not, shows option to login or register.
 *
 *  Context:
 *      - UserContext
 *
 *  Routes -> Homepage
 *  Routed at /
 */

function Homepage() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="Homepage">
      <div className="Homepage-body pt-5">
        <div className="Homepage-msg card homepage-card col-6 offset-3 py-3">
          <h1 className="Homepage-msg pt-4">Sharebnb</h1>
          <h4 className="Homepage-submsg mt-2">
            where sharing is caring and any space can be <span style={{color:"#eb6864"}}>your</span> space
          </h4>
          {currentUser ? (
            <h2 className="mt-5">Welcome back, {currentUser.firstName} !</h2>
          ) : (
            <div>
              <h5 className="mt-3 mb-3">Book today!</h5>
              <Link to="/signup">
                <button className="btn btn-primary me-2">Sign Up</button>
              </Link>
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
