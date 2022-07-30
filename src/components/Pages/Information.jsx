import React, { Component } from 'react';
import Card from '../Card';

export default class Information extends Component {
  render() {
    let information = { ...this.props.informationState };

    return (
      <Card>
        <Card.Title title="Information" />
        <Card.Form handleSubmit={this.props.handleSubmit}>
          <Card.Label labelTitle="First name">
            <Card.Input
              inputType="text"
              placeholder="Liam"
              inputName="first"
              value={information.first}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
          <Card.Label labelTitle="Last name">
            <Card.Input
              inputType="text"
              placeholder="Anderson"
              inputName="last"
              value={information.last}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
          <Card.Label labelTitle="Professional title">
            <Card.Input
              inputType="text"
              placeholder="Software Engineer"
              inputName="title"
              value={information.title}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
          <Card.Label labelTitle="Profile">
            <Card.TextArea
              name="profile"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend augue quis dui rhoncus molestie. Donec eget varius dolor. Praesent."
              value={information.profile}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
        </Card.Form>
        <Card.Wrapper wrapperType="primary" position="center">
          <Card.Button
            primary={'true'}
            buttonType="button"
            buttonText="Contact"
            direction="next"
            path="/contact"
          />
        </Card.Wrapper>
      </Card>
    );
  }
}
