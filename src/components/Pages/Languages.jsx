import React, { Component } from 'react';
import Card from '../Card';

export default class Languages extends Component {
  render() {
    return (
      <Card>
        <Card.Title title="Languages" />
        <Card.Form handleSubmit={this.props.handleSubmit}>
          <Card.Label labelTitle="Language">
            <Card.Input
              inputType="text"
              placeholder="German"
              inputName="name"
            />
          </Card.Label>
          <Card.Label labelTitle="Level">
            <Card.Input inputType="text" placeholder="B1" inputName="level" />
          </Card.Label>
          <Card.Wrapper>
            <Card.ButtonAdd direction="previous" text="Previous" />
            <Card.ButtonAdd direction="next" text="Add" />
          </Card.Wrapper>
          <Card.Wrapper>
            <Card.Button
              buttonType="button"
              buttonText="Skills"
              direction="previous"
              path="/skills"
            />
            <Card.Button
              buttonType="submit"
              buttonText="Preview"
              direction="next"
              path="/preview"
            />
          </Card.Wrapper>
        </Card.Form>
      </Card>
    );
  }
}
