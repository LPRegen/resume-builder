import React, { Component } from 'react';
import Card from '../Card';

export default class Education extends Component {
  render() {
    let education = [...this.props.educationState];
    let selectedExperience = education[0];

    return (
      <Card>
        <Card.Title title="Education" />
        <Card.Form handleSubmit={this.props.handleSubmit}>
          <Card.Label labelTitle="Degree">
            <Card.Input
              inputType="text"
              placeholder="Bachelor in Economics"
              inputName="degree"
              value={education[selectedExperience].degree}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
          <Card.Label labelTitle="University">
            <Card.Input
              inputType="text"
              placeholder="University of Georgia"
              inputName="university"
              value={education[selectedExperience].university}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
          <Card.Label labelTitle="From">
            <Card.Input
              inputType="text"
              placeholder="06/2010"
              inputName="from"
              value={education[selectedExperience].from}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
          <Card.Label labelTitle="To">
            <Card.Input
              inputType="text"
              placeholder="12/2014"
              inputName="to"
              value={education[selectedExperience].to}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
        </Card.Form>
        <Card.Wrapper wrapperType={'secondary'}>
          <Card.ButtonDelete
            deleteExperience={this.props.deleteExperience}
            display={education.length > 2 ? 'true' : 'false'}
          />
        </Card.Wrapper>
        <Card.Wrapper wrapperType={'secondary'}>
          {education[0] > 1 && (
            <Card.ButtonAdd
              direction="previous"
              text="Previous"
              onClick={this.props.onClick}
            />
          )}
          {education[0] < 6 && (
            <Card.ButtonAdd
              primary
              direction="next"
              text={education[selectedExperience + 1] ? 'Next' : 'Add'}
              onClick={this.props.onClick}
            />
          )}
        </Card.Wrapper>
        <Card.Wrapper wrapperType={'primary'} position="center">
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
      </Card>
    );
  }
}
