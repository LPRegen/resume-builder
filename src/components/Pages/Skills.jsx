import React, { Component } from 'react';
import Card from '../Card';

export default class Skills extends Component {
  render() {
    let skills = Array.from(this.props.skills);

    return (
      <Card>
        <Card.Title title="Skills" />
        <Card.Form handleSubmit={this.props.handleSubmit}>
          {skills.map((skill, index) => {
            return (
              <Card.Skill
                key={index}
                placeholder={skill.placeholder}
                inputName={`skill${index}`}
                removeSkill={this.props.removeSkill}
              />
            );
          })}
          <Card.Wrapper>
            {skills.length < 10 && (
              <Card.ButtonAdd
                primary
                direction="next"
                text="Add"
                onClick={this.props.addSkill}
              />
            )}
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
