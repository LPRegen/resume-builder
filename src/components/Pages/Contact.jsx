import React, { Component } from 'react';
import Card from '../Card';

export default class Contact extends Component {
  render() {
    let contact = { ...this.props.contactState };
    return (
      <Card>
        <Card.Title title="Contact" />
        <Card.Form handleSubmit={this.props.handleSubmit}>
          <Card.Label labelTitle="Website">
            <Card.Input
              inputType="text"
              placeholder="liamdevelops.com"
              inputName="website"
              value={contact.website}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
          <Card.Label labelTitle="Email">
            <Card.Input
              inputType="email"
              placeholder="liam.anderson@email.com"
              inputName="email"
              value={contact.email}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
          <Card.Label labelTitle="Location">
            <Card.Input
              inputType="text"
              placeholder="Noord, Aruba"
              inputName="location"
              value={contact.location}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
          <Card.Label labelTitle="Phone">
            <Card.Input
              inputType="number"
              placeholder="+549 351 5555555"
              inputName="phone"
              value={contact.phone}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
          <Card.Wrapper primary>
            <Card.Button
              buttonType="button"
              buttonText="Information"
              direction="previous"
              path="/"
            />
            <Card.Button
              buttonType="submit"
              buttonText="Education"
              direction="next"
              path="/education"
            />
          </Card.Wrapper>
        </Card.Form>
      </Card>
    );
  }
}
