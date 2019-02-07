import { Box, Button, Form, FormField } from "grommet";
import React from "react";

export default class EmailForm extends React.Component<{

}, {
  value: string;
}> {
  constructor(props) {
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    return (
      <Box pad="xlarge">
        <Form onSubmit={this.handleSubmit}>
          <FormField name="email" label="E-mail"  />
          <Button type="submit" primary label="Submit" />
        </Form>
      </Box>
    );
  }

  private handleChange(event) {
    this.setState({value: event.target.value});
  }

  private handleSubmit(event) {
    event.preventDefault();
    window.location.href = `/porterduff?email=${event.value.email}`;
  }
}
