import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mail: "mon@email.com",
      password: "monPassw0rd",
      confirmPassword: " ",
      name: "James",
      lastname: "Bond"
    };
  }
  onSubmit = e => {
    this.setState({
      mail: e.target.value
    });
  };
  onChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleConfirmPassword = event => {
    this.setState({ confirmPassword: event.target.value });
  };

  onChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };

  onChangeLastname = e => {
    this.setState({
      lastname: e.target.value
    });
  };

  handleSubmit = e => {
    if (this.state.confirmPassword !== this.state.password) {
      alert("error incorrect password");
      this.setState({ confirmPassword: e.target.value });
      e.preventDefault();
      console.log(this.state);
    }
  };
  render() {
    const titre = JSON.stringify(this.state, 1, 1);
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{titre}</h1>
        <br />
        <p>e-mail</p>
        <input onSubmit={this.onChange} type="email" name="email" />
        <br />
        <p>password</p>
        <input
          onChange={this.onChangePassword}
          type="password"
          name="password"
        />
        <p>confirm password</p>
        <input
          onChange={this.handleConfirmPassword}
          type="cpassword"
          name="cpassword"
        />
        <br />
        <p>name</p>
        <input onChange={this.onChangeName} type="text" name="name" />
        <br />
        <p>lastname</p>
        <input onChange={this.onChangeLastname} type="text" name="lastname" />
        <br />
        <input type="submit" value="Soumettre" />
      </form>
    );
  }
}

export default Form;
