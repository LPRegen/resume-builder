import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { withRouter } from '../../utils/withRouter';

import Information from './Information';
import Contact from './Contact';
import Education from './Education';
import Work from './Work';
import Skills from './Skills';
import Languages from './Languages';
import Preview from './Preview';

class Pages extends Component {
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
      education: {
        currentExperience: 0,
        experience0: {
          degree: '',
          university: '',
          from: '',
          to: '',
        },
        experience1: {
          degree: '',
          university: '',
          from: '',
          to: '',
        },
        experience2: {
          degree: '',
          university: '',
          from: '',
          to: '',
        },
      },
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.selectExperience = this.selectExperience.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
    this.handleSkillChange = this.handleSkillChange.bind(this);
  }

  updateState = (e, updateStateOf) => {
    let stateObj = JSON.parse(JSON.stringify({ ...this.state[updateStateOf] }));

    if (
      updateStateOf === 'education' ||
      updateStateOf === 'work' ||
      updateStateOf === 'languages'
    ) {
      let currentExperience =
        'experience' + this.state[updateStateOf].currentExperience;
      let experienceState = JSON.parse(
        JSON.stringify(stateObj[currentExperience])
      );
      for (let property in experienceState) {
        experienceState[property] = e.target[property].value;
      }
      this.setState({
        [updateStateOf]: {
          ...stateObj,
          [currentExperience]: { ...experienceState },
        },
      });
      return;
    }

    for (let property in stateObj) {
      stateObj[property] = e.target[property].value;
    }
    this.setState({ [updateStateOf]: stateObj });
  };

  handleSubmit(e, navigateTo, updateStateOf) {
    e.preventDefault();
    if (updateStateOf !== 'skills') {
      this.updateState(e, updateStateOf);
    }
    this.props.navigate(navigateTo);
  }

  selectExperience(e, updateStateOf) {
    let stateObj = { ...this.state[updateStateOf] };
    for (let property in stateObj) {
      if (property === 'currentExperience') {
        let direction = e.target.getAttribute('direction');
        direction === 'previous'
          ? (stateObj[property] -= 1)
          : (stateObj[property] += 1);
      }
    }
    this.setState({ [updateStateOf]: stateObj });
  }

  updateExperience(e, updateStateOf) {
    let stateObj = { ...this.state[updateStateOf] };
    let selectedExperience = 'experience' + stateObj.currentExperience;
    this.selectExperience(e, updateStateOf);
    for (let property in stateObj[selectedExperience]) {
      stateObj[selectedExperience][property] =
        e.target.parentElement.parentElement[property].value;
    }
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

  render() {
    return (
      <Routes>
        <Route
          path="/information"
          element={
            <Information
              handleSubmit={(e) =>
                this.handleSubmit(e, '/contact', 'information')
              }
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              handleSubmit={(e) =>
                this.handleSubmit(e, '/education', 'contact')
              }
            />
          }
        />
        <Route
          path="/education"
          element={
            <Education
              handleSubmit={(e) => this.handleSubmit(e, '/work', 'education')}
              onClick={(e) => this.updateExperience(e, 'education')}
              currentExperience={this.state.education.currentExperience}
            />
          }
        />
        <Route
          path="/work"
          element={
            <Work
              handleSubmit={(e) => this.handleSubmit(e, '/skills', 'work')}
              onClick={(e) => this.updateExperience(e, 'work')}
              currentExperience={this.state.work.currentExperience}
            />
          }
        />
        <Route
          path="/skills"
          element={
            <Skills
              handleSubmit={(e) => this.handleSubmit(e, '/languages', 'skills')}
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
              handleSubmit={(e) =>
                this.handleSubmit(e, '/preview', 'languages')
              }
              languages={this.state.languages.currentExperience}
              onClick={(e) => this.updateExperience(e, 'languages')}
            />
          }
        />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    );
  }
}

export default withRouter(Pages);
