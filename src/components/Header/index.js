import { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <>
        <h1>
          <Link to="/home">Home</Link>
        </h1>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
      </>
    );
  }
}
export default Header;
