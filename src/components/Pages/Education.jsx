import React, { Component } from 'react';
import Card from '../Card';

export default class Education extends Component {
  render() {
    return (
      <Card>
        <Card.Title title="Education" />
        <Card.Form handleSubmit={this.props.handleSubmit}>
          <Card.Label labelTitle="Degree">
            <Card.Input
              inputType="text"
              placeholder="Bachelor in Economics"
              inputName="degree"
            />
          </Card.Label>
          <Card.Label labelTitle="University">
            <Card.Input
              inputType="text"
              placeholder="University of Georgia"
              inputName="university"
            />
          </Card.Label>
          <Card.Label labelTitle="From">
            <Card.Input
              inputType="number"
              placeholder="2010"
              inputName="from"
            />
          </Card.Label>
          <Card.Label labelTitle="To">
            <Card.Input inputType="number" placeholder="2014" inputName="to" />
          </Card.Label>
          <Card.Wrapper>
            <Card.ButtonAdd direction="previous" text="Previous" />
            <Card.ButtonAdd direction="next" text="Add" />
          </Card.Wrapper>
          <Card.Wrapper primary>
            <Card.Button
              buttonType="button"
              buttonText="Contact"
              direction="previous"
              path="/contact"
            />
            <Card.Button
              buttonType="submit"
              buttonText="Work"
              direction="next"
              path="/work"
            />
          </Card.Wrapper>
        </Card.Form>
      </Card>
    );
  }
}
