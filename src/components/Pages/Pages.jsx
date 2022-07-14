import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Information from './Information';
import Contact from './Contact';
import Education from './Education';
import Work from './Work';
import Skills from './Skills';
import Languages from './Languages';
import Preview from './Preview';

export default class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      information: {
        first: '',
        last: '',
        title: '',
        profile: '',
      },
      contact: {
        website: '',
        email: '',
        location: '',
        phone: '',
      },
      education: [1, { degree: '', university: '', from: '', to: '' }],
      work: {
        currentExperience: 0,
        experience0: {
          title: '',
          company: '',
          from: '',
          to: '',
        },
        experience1: {
          title: '',
          company: '',
          from: '',
          to: '',
        },
        experience2: {
          title: '',
          company: '',
          from: '',
          to: '',
        },
      },
      skills: [{ skillValue: '', placeholder: 'Team work' }],
      languages: {
        currentExperience: 0,
        experience0: {
          name: '',
          level: '',
        },
        experience1: {
          name: '',
          level: '',
        },
        experience2: {
          name: '',
          level: '',
        },
      },
    };
    this.selectExperience = this.selectExperience.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
    this.handleSkillChange = this.handleSkillChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createExperience = this.createExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
  }

  createExperience(updateStateOf, stateTarget) {
    if (!stateTarget[stateTarget[0]]) {
      let newExperience;
      if (updateStateOf !== 'languages') {
        newExperience = {
          [updateStateOf === 'education' ? 'degree' : 'title']: '',
          [updateStateOf === 'education' ? 'university' : 'company']: '',
          from: '',
          to: '',
        };
      } else {
        newExperience = {
          name: '',
          level: '',
        };
      }
      stateTarget.push(newExperience);
      this.setState({ [updateStateOf]: stateTarget });
    }
  }

  selectExperience(e, updateStateOf) {
    let stateTarget = this.state[updateStateOf];
    let direction = e.target.getAttribute('direction');
    direction === 'previous' ? (stateTarget[0] -= 1) : (stateTarget[0] += 1);
    this.setState(
      { [[updateStateOf][0]]: stateTarget },
      this.createExperience(updateStateOf, stateTarget)
    );
  }

  deleteExperience(e, updateStateOf) {
    let stateTarget = this.state[updateStateOf];
    let experienceTarget = stateTarget[0];
    if (experienceTarget === stateTarget.length - 1) {
      stateTarget[0] -= 1;
    }
    stateTarget.splice(experienceTarget, 1);
    this.setState({ [updateStateOf]: stateTarget });
    e.target.setAttribute('test', 'asd');
    console.log(e.target);
  }

  addSkill() {
    let skillsState = JSON.parse(JSON.stringify([...this.state.skills]));
    if (skillsState.length < 10) {
      let newSkill = { skillValue: '', placeholder: '' };
      skillsState.push(newSkill);
      this.setState({ skills: skillsState });
    }
  }

  removeSkill(e) {
    let skillsState = JSON.parse(JSON.stringify([...this.state.skills]));
    let targetSkill = e.target.previousElementSibling
      .getAttribute('name')
      .slice(-1);
    skillsState.splice(targetSkill, 1);
    this.setState({ skills: skillsState });
  }

  handleSkillChange(e) {
    let skillsState = JSON.parse(JSON.stringify([...this.state.skills]));
    let newSkillValue = e.target.value;
    let skillTarget = e.target.getAttribute('name').slice(-1);
    skillsState[skillTarget].skillValue = newSkillValue;
    this.setState({ skills: skillsState });
  }

  handleChange(e, updateStateOf) {
    let targetState = JSON.parse(
      JSON.stringify([...this.state[updateStateOf]])
    );
    let newValue = e.target.value;
    let targetValue = e.target.getAttribute('name');
    if (
      updateStateOf === 'education' ||
      updateStateOf === 'work' ||
      updateStateOf === 'languages'
    ) {
      let experience = targetState[0];
      targetState[experience] = {
        ...targetState[experience],
        [targetValue]: newValue,
      };
      this.setState({ [updateStateOf]: targetState });
      return;
    }
    targetState[targetValue] = newValue;
    this.setState({ [updateStateOf]: targetState });
  }

  render() {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <Information
              informationState={this.state.information}
              handleChange={(e) => this.handleChange(e, 'information')}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              contactState={this.state.contact}
              handleChange={(e) => this.handleChange(e, 'contact')}
            />
          }
        />
        <Route
          path="/education"
          element={
            <Education
              onClick={(e) => this.selectExperience(e, 'education')}
              educationState={this.state.education}
              handleChange={(e) => this.handleChange(e, 'education')}
              deleteExperience={(e) => this.deleteExperience(e, 'education')}
            />
          }
        />
        <Route
          path="/work"
          element={
            <Work
              onClick={(e) => this.updateExperience(e, 'work')}
              currentExperience={this.state.work.currentExperience}
              workState={this.state.work}
              handleChange={(e) => this.handleChange(e, 'work')}
            />
          }
        />
        <Route
          path="/skills"
          element={
            <Skills
              skills={this.state.skills}
              addSkill={this.addSkill}
              removeSkill={(e) => this.removeSkill(e)}
              handleChange={(e) => this.handleSkillChange(e)}
            />
          }
        />
        <Route
          path="/languages"
          element={
            <Languages
              languages={this.state.languages.currentExperience}
              onClick={(e) => this.updateExperience(e, 'languages')}
              languagesState={this.state.languages}
              handleChange={(e) => this.handleChange(e, 'languages')}
            />
          }
        />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    );
  }
}
