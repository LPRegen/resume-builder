import React, { Component } from 'react';
import Card from '../Card';

export default class Languages extends Component {
  render() {
    let languages = { ...this.props.languagesState };
    let experience = 'experience' + languages.currentExperience;

    return (
      <Card>
        <Card.Title title="Languages" />
        <Card.Form handleSubmit={this.props.handleSubmit}>
          <Card.Label labelTitle="Language">
            <Card.Input
              inputType="text"
              placeholder="German"
              inputName="name"
              value={languages[experience].name}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
          <Card.Label labelTitle="Level">
            <Card.Input
              inputType="text"
              placeholder="B1"
              inputName="level"
              value={languages[experience].level}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
          <Card.Wrapper>
            {languages.currentExperience > 0 && (
              <Card.ButtonAdd
                direction="previous"
                text="Previous"
                onClick={this.props.onClick}
              />
            )}
            {languages.currentExperience < 2 && (
              <Card.ButtonAdd
                primary
                direction="next"
                text="Add"
                onClick={this.props.onClick}
              />
            )}
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
