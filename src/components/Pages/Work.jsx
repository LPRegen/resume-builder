import React, { Component } from 'react';
import Card from '../Card';

export default class Work extends Component {
  render() {
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
              inputType="number"
              placeholder="2018"
              inputName="from"
            />
          </Card.Label>
          <Card.Label labelTitle="To">
            <Card.Input inputType="number" placeholder="2020" inputName="to" />
          </Card.Label>
          <Card.Wrapper>
            <Card.ButtonAdd direction="previous" text="Previous" />
            <Card.ButtonAdd direction="next" text="Add" />
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
