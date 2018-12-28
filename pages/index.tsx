import React from 'react'

export default class EmailForm extends React.Component<{

}, {
  value: string;
}> {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    window.location.href = `/porterduff?email=${this.state.value}`;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          E-mail:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}