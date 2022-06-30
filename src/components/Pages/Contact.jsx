import React, { Component } from 'react';

import Card from '../Card';

export default class Contact extends Component {
  render() {
    return (
      <Card>
        <Card.Title title="Contact" />
        <Card.Form>
          <Card.Label labelTitle="Website">
            <Card.Input
              inputType="text"
              placeholder="liamdevelops.com"
              inputName="website"
            />
          </Card.Label>
          <Card.Label labelTitle="Email">
            <Card.Input
              inputType="email"
              placeholder="liam.anderson@email.com"
              inputName="email"
            />
          </Card.Label>
          <Card.Label labelTitle="Location">
            <Card.Input
              inputType="text"
              placeholder="Noord, Aruba"
              inputName="location"
            />
          </Card.Label>
          <Card.Label labelTitle="Phone">
            <Card.Input
              inputType="number"
              placeholder="+549 351 5555555"
              inputName="phone"
            />
          </Card.Label>
          <Card.Wrapper>
            <Card.Button
              buttonText="Information"
              direction="previous"
              path="/information"
            />
            <Card.Button
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
