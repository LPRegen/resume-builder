import React, { Component } from 'react';
import Card from '../Card';

export default class Languages extends Component {
  render() {
    let languages = [...this.props.languagesState];
    let selectedExperience = languages[0];
    let currentWidth = this.props.currentWidth;

    return (
      <Card>
        <Card.Title title="Languages" />
        <Card.Form handleSubmit={this.props.handleSubmit}>
          <Card.Label labelTitle="Language">
            <Card.Input
              inputType="text"
              placeholder="German"
              inputName="name"
              value={languages[selectedExperience].name}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
          <Card.Label labelTitle="Level">
            <Card.Input
              inputType="text"
              placeholder="B1"
              inputName="level"
              value={languages[selectedExperience].level}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
        </Card.Form>
        <Card.Wrapper wrapperType={'secondary'}>
          <Card.ButtonDelete
            deleteExperience={this.props.deleteExperience}
            display={languages.length > 2 ? 'true' : 'false'}
          />
        </Card.Wrapper>
        <Card.Wrapper wrapperType="secondary">
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
          {languages[0] > 1 && (
            <Card.ButtonAdd
              direction="previous"
              text="Previous"
              onClick={this.props.onClick}
            />
          )}
          {languages[0] < 6 && (
            <Card.ButtonAdd
              primary
              direction="next"
              text={languages[selectedExperience + 1] ? 'Next' : 'Add'}
              onClick={this.props.onClick}
            />
          )}
        </Card.Wrapper>
        <Card.Wrapper wrapperType={'primary'} position="center">
          <Card.Button
            buttonType="button"
            buttonText="Skills"
            direction="previous"
            path="/skills"
          />
          {currentWidth < 719 && (
            <Card.Button
              buttonType="submit"
              buttonText="Preview"
              direction="next"
              path="/preview"
            />
          )}
        </Card.Wrapper>
      </Card>
    );
  }
}
