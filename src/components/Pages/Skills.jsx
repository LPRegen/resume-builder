import React, { Component } from 'react';
import Card from '../Card';

export default class Skills extends Component {
  render() {
    return (
      <Card>
        <Card.Title title="Skills" />
        <Card.Form handleSubmit={this.props.handleSubmit}>
          <Card.Skills
            inputType="text"
            placeholder="Team player"
            inputName="skill0"
          />
          <Card.Skills
            inputType="text"
            placeholder="Resilient"
            inputName="skill1"
          />
          <Card.Skills
            inputType="text"
            placeholder="Empathetic"
            inputName="skill2"
          />
          <Card.Skills
            inputType="text"
            placeholder="Problem solving"
            inputName="skill3"
          />
          <Card.Skills
            inputType="text"
            placeholder="Communication"
            inputName="skill4"
          />
          <Card.Wrapper>
            <Card.ButtonAdd direction="previous" text="Previous" />
            <Card.ButtonAdd direction="next" text="Add" />
          </Card.Wrapper>
          <Card.Wrapper primary>
            <Card.Button
              buttonType="button"
              buttonText="Work"
              direction="previous"
              path="/work"
            />
            <Card.Button
              buttonType="submit"
              buttonText="Languages"
              direction="next"
              path="/languages"
            />
          </Card.Wrapper>
        </Card.Form>
      </Card>
    );
  }
}
