import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mail: ""
    };
    this.listener = this.listener.bind(this);
  }
  listener(e) {
    this.setState({
      mail: e.target.value
    });
  }
  render() {
    return (
      <div>
        <h1 value="toto">{this.state.mail}</h1>
        <input onChange={this.listener} type="email" name="email" />
      </div>
    );
  }
}

export default Form;
