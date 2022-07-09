import React, { Component } from 'react';
import Card from '../Card';

export default class Education extends Component {
  render() {
    let currentExperience = this.props.currentExperience;

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
              inputType="text"
              placeholder="06/2010"
              inputName="from"
            />
          </Card.Label>
          <Card.Label labelTitle="To">
            <Card.Input inputType="text" placeholder="12/2014" inputName="to" />
          </Card.Label>
          <Card.Wrapper>
            {currentExperience > 0 && (
              <Card.ButtonAdd
                direction="previous"
                text="Previous"
                onClick={this.props.onClick}
              />
            )}
            {currentExperience < 2 && (
              <Card.ButtonAdd
                primary
                direction="next"
                text="Add"
                onClick={this.props.onClick}
              />
            )}
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
