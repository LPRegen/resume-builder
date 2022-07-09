import React, { Component } from 'react';
import Card from '../Card';

export default class Work extends Component {
  render() {
    let currentExperience = this.props.currentExperience;

    return (
      <Card>
        <Card.Title title="Work" />
        <Card.Form handleSubmit={this.props.handleSubmit}>
          <Card.Label labelTitle="Title">
            <Card.Input
              inputType="text"
              placeholder="Software developer"
              inputName="title"
            />
          </Card.Label>
          <Card.Label labelTitle="Company">
            <Card.Input
              inputType="text"
              placeholder="The Home Depot"
              inputName="company"
            />
          </Card.Label>
          <Card.Label labelTitle="From">
            <Card.Input
              inputType="text"
              placeholder="07/2018"
              inputName="from"
            />
          </Card.Label>
          <Card.Label labelTitle="To">
            <Card.Input inputType="text" placeholder="12/2020" inputName="to" />
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
              buttonText="Education"
              direction="previous"
              path="/education"
            />
            <Card.Button
              buttonType="submit"
              buttonText="Skills"
              direction="next"
              path="/skills"
            />
          </Card.Wrapper>
        </Card.Form>
      </Card>
    );
  }
}
