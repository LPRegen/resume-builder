import React, { Component } from 'react';
import Card from '../Card';

export default class Skills extends Component {
  render() {
    document.title = `Resume builder - Skills`;
    let skills = Array.from(this.props.skills);

    return (
      <Card>
        <Card.Title title="Skills" />
        <Card.Form formType="skills" handleSubmit={this.props.handleSubmit}>
          {skills.map((skill, index) => {
            return (
              <Card.Skill
                key={index}
                value={`${skill.skillValue}`}
                placeholder={skill.placeholder}
                inputName={`skill${index}`}
                removeSkill={this.props.removeSkill}
                handleChange={this.props.handleChange}
              />
            );
          })}
        </Card.Form>

        <Card.Wrapper wrapperType="secondary">
          {skills.length < 10 && (
            <Card.ButtonAdd
              primary
              direction="next"
              text="Add"
              onClick={this.props.addSkill}
            />
          )}
        </Card.Wrapper>
        <Card.Wrapper wrapperType="primary">
          <Card.Button
            buttonType="button"
            buttonText="Work"
            direction="previous"
            path="/work"
          />
          <Card.Button
            buttonType="button"
            buttonText="Languages"
            direction="next"
            path="/languages"
          />
        </Card.Wrapper>
      </Card>
    );
  }
}
