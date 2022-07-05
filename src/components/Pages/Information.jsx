import React, { Component } from 'react';
import Card from '../Card';

export default class Information extends Component {
  render() {
    return (
      <Card>
        <Card.Title title="Information" />
        <Card.Form handleSubmit={this.props.handleSubmit}>
          <Card.Label labelTitle="First name">
            <Card.Input inputType="text" placeholder="Liam" inputName="first" />
          </Card.Label>
          <Card.Label labelTitle="Last name">
            <Card.Input
              inputType="text"
              placeholder="Anderson"
              inputName="last"
            />
          </Card.Label>
          <Card.Label labelTitle="Professional title">
            <Card.Input
              inputType="text"
              placeholder="Software Engineer"
              inputName="title"
            />
          </Card.Label>
          <Card.Label labelTitle="Profile">
            <Card.TextArea
              name="profile"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend augue quis dui rhoncus molestie. Donec eget varius dolor. Praesent."
            />
          </Card.Label>
          <Card.Wrapper primary>
            <Card.Button
              buttonType="submit"
              buttonText="Contact"
              direction="next"
              path="/contact"
            />
          </Card.Wrapper>
        </Card.Form>
      </Card>
    );
  }
}
