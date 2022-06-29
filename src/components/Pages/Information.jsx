import React, { Component } from 'react';
import Card from '../Card';

export default class Information extends Component {
  render() {
    return (
      <Card>
        <Card.Title title="Information" />
        <Card.Form>
          <Card.Label labelTitle="First name">
            <Card.Input
              inputType="text"
              placeholder="Liam"
              inputName="first-name"
            />
          </Card.Label>
          <Card.Label labelTitle="Last name">
            <Card.Input
              inputType="text"
              placeholder="Anderson"
              inputName="last-name"
            />
          </Card.Label>
          <Card.Label labelTitle="Professional title">
            <Card.Input
              inputType="text"
              placeholder="Software Engineer"
              inputName="professional-title"
            />
          </Card.Label>
          <Card.Label labelTitle="Profile">
            <Card.TextArea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend augue quis dui rhoncus molestie. Donec eget varius dolor. Praesent." />
          </Card.Label>
          <Card.Wrapper>
            <Card.Button
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
