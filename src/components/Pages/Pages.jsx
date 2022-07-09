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
          degree: 'experience0',
          university: '',
          from: '',
          to: '',
        },
        experience1: {
          degree: 'experience1',
          university: '',
          from: '',
          to: '',
        },
        experience2: {
          degree: 'experience2',
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
      skills: {
        skill0: '',
        skill1: '',
        skill2: '',
        skill3: '',
        skill4: '',
      },
      languages: {
        name: '',
        level: '',
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.selectExperience = this.selectExperience.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
  }

  updateState = (e, updateStateOf) => {
    if (updateStateOf === ('education' || 'work')) {
    }
    let stateObj = { ...this.state[updateStateOf] };
    for (let property in stateObj) {
      stateObj[property] = e.target[property].value;
    }
    this.setState({ [updateStateOf]: stateObj });
  };

  handleSubmit(e, navigateTo, updateStateOf) {
    e.preventDefault();
    this.updateState(e, updateStateOf);
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
              onClick={(e) => this.selectExperience(e, 'education')}
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
            />
          }
        />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    );
  }
}

export default withRouter(Pages);
