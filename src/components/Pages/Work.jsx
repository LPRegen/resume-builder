import React, { Component } from 'react';
import Card from '../Card';

export default class Work extends Component {
  render() {
    let work = { ...this.props.workState };
    let experience = 'experience' + work.currentExperience;

    return (
      <Card>
        <Card.Title title="Work" />
        <Card.Form handleSubmit={this.props.handleSubmit}>
          <Card.Label labelTitle="Title">
            <Card.Input
              inputType="text"
              placeholder="Software developer"
              inputName="title"
              value={work[experience].title}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
          <Card.Label labelTitle="Company">
            <Card.Input
              inputType="text"
              placeholder="The Home Depot"
              inputName="company"
              value={work[experience].company}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
          <Card.Label labelTitle="From">
            <Card.Input
              inputType="text"
              placeholder="07/2018"
              inputName="from"
              value={work[experience].from}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
          <Card.Label labelTitle="To">
            <Card.Input
              inputType="text"
              placeholder="12/2020"
              inputName="to"
              value={work[experience].to}
              handleChange={this.props.handleChange}
            />
          </Card.Label>
          <Card.Wrapper>
            {work.currentExperience > 0 && (
              <Card.ButtonAdd
                direction="previous"
                text="Previous"
                onClick={this.props.onClick}
              />
            )}
            {work.currentExperience < 2 && (
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
