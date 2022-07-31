import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import Card from './components/Card';
import Pages from './components/Pages/Pages';
import Resume from './components/Resume/Resume';

export default class App extends Component {
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
      work: [1, { title: '', company: '', from: '', to: '', description: '' }],
      skills: [{ skillValue: '', placeholder: 'Team work' }],
      languages: [1, { name: '', level: '' }],
      width: window.innerWidth,
    };
    this.selectExperience = this.selectExperience.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
    this.handleSkillChange = this.handleSkillChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createExperience = this.createExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.updateWidth = this.updateWidth.bind(this);
  }

  updateWidth() {
    this.setState({ ...this.state, width: window.innerWidth });
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateWidth);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
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
        if (updateStateOf === 'work') newExperience.description = '';
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

  deleteExperience(updateStateOf) {
    let stateTarget = this.state[updateStateOf];
    let experienceTarget = stateTarget[0];
    stateTarget[0] === 1 ? (stateTarget[0] = 1) : (stateTarget[0] -= 1);
    stateTarget.splice(experienceTarget, 1);
    this.setState({ [updateStateOf]: stateTarget });
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
    let targetState;
    let newValue = e.target.value;
    let targetValue = e.target.getAttribute('name');
    if (
      updateStateOf === 'education' ||
      updateStateOf === 'work' ||
      updateStateOf === 'languages'
    ) {
      targetState = JSON.parse(JSON.stringify([...this.state[updateStateOf]]));
      let experience = targetState[0];
      targetState[experience] = {
        ...targetState[experience],
        [targetValue]: newValue,
      };
      this.setState({ [updateStateOf]: targetState });
      return;
    }
    targetState = JSON.parse(JSON.stringify({ ...this.state[updateStateOf] }));
    targetState[targetValue] = newValue;
    this.setState({ [updateStateOf]: targetState });
  }

  render() {
    let CardComponent = (
      <Pages
        state={this.state}
        handleInfoChange={(e) => this.handleChange(e, 'information')}
        handleContactChange={(e) => this.handleChange(e, 'contact')}
        handleEducationChange={(e) => this.handleChange(e, 'education')}
        handleWorkChange={(e) => this.handleChange(e, 'work')}
        handleLanguagesChange={(e) => this.handleChange(e, 'languages')}
        selectEducationExperience={(e) => this.selectExperience(e, 'education')}
        selectWorkExperience={(e) => this.selectExperience(e, 'work')}
        selectLanguagesExperience={(e) => this.selectExperience(e, 'languages')}
        deleteEducationExperience={(e) => this.deleteExperience(e, 'education')}
        deleteWorkExperience={(e) => this.deleteExperience(e, 'work')}
        deleteLanguagesExperience={(e) => this.deleteExperience(e, 'languages')}
        addSkill={this.addSkill}
        removeSkill={this.removeSkill}
        handleSkillChange={this.handleSkillChange}
      />
    );

    if (this.state.width > 719) {
      return (
        <>
          {CardComponent}
          <Card>
            <Resume state={this.state} ref={(el) => (this.componentRef = el)} />
            <Card.Wrapper wrapperType="primary" position="center">
              <ReactToPrint
                documentTitle={`Resume-${this.state.information.first}-${this.state.information.last}`}
                copyStyles={true}
                trigger={() => {
                  return <Card.ButtonPrint>Print Resume</Card.ButtonPrint>;
                }}
                content={() => this.componentRef}
              />
            </Card.Wrapper>
          </Card>
        </>
      );
    } else {
      return <>{CardComponent}</>;
    }
  }
}
