import { Component } from "react";

class Login extends Component {
  state = {
    username: "",
  };
  onChageValue = (event) => {
    this.setState({ username: event.target.value });
  };

  onSubmitLogin = (event) => {
    event.preventDefault();
    const { history } = this.props;
    history.replace("/home");
  };

  render() {
    const { username } = this.state;
    return (
      <form onSubmit={this.onSubmitLogin}>
        <label>userName</label>
        <input type="text" onChange={this.onChageValue} />
        <h1>{username}</h1>
        <button type="submit">login</button>
      </form>
    );
  }
}
export default Login;
