import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import Card from '../Card';
import Information from './Information';
import Contact from './Contact';
import Education from './Education';
import Work from './Work';
import Skills from './Skills';
import Languages from './Languages';
import Resume from '../Resume/Resume';

export default class Pages extends Component {
  render() {
    let currentState = this.props.state;
    return (
      <Routes>
        <Route
          path="/"
          element={
            <Information
              informationState={currentState.information}
              handleChange={(e) =>
                this.props.handleInfoChange(e, 'information')
              }
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              contactState={currentState.contact}
              handleChange={(e) => this.props.handleContactChange(e, 'contact')}
            />
          }
        />
        <Route
          path="/education"
          element={
            <Education
              onClick={(e) =>
                this.props.selectEducationExperience(e, 'education')
              }
              educationState={currentState.education}
              handleChange={(e) =>
                this.props.handleEducationChange(e, 'education')
              }
              deleteExperience={() =>
                this.props.deleteEducationExperience('education')
              }
            />
          }
        />
        <Route
          path="/work"
          element={
            <Work
              onClick={(e) => this.props.selectWorkExperience(e, 'work')}
              workState={currentState.work}
              handleChange={(e) => this.props.handleWorkChange(e, 'work')}
              deleteExperience={() => this.props.deleteWorkExperience('work')}
            />
          }
        />
        <Route
          path="/skills"
          element={
            <Skills
              skills={currentState.skills}
              addSkill={this.props.addSkill}
              removeSkill={(e) => this.props.removeSkill(e)}
              handleChange={(e) => this.props.handleSkillChange(e)}
            />
          }
        />
        <Route
          path="/languages"
          element={
            <Languages
              onClick={(e) =>
                this.props.selectLanguagesExperience(e, 'languages')
              }
              currentWidth={currentState.width}
              languagesState={currentState.languages}
              handleChange={(e) =>
                this.props.handleLanguagesChange(e, 'languages')
              }
              deleteExperience={() =>
                this.props.deleteLanguagesExperience('languages')
              }
            />
          }
        />
        <Route
          path="/preview"
          element={
            <Card>
              <Resume
                state={currentState}
                ref={(el) => (this.componentRef = el)}
              />
              <Card.Wrapper wrapperType="primary" position="center">
                <Card.Button
                  buttonType="button"
                  buttonText="Languages"
                  direction="previous"
                  path="/languages"
                />
                <ReactToPrint
                  copyStyles={true}
                  trigger={() => {
                    return <Card.ButtonPrint>Print Resume</Card.ButtonPrint>;
                  }}
                  content={() => this.componentRef}
                />
              </Card.Wrapper>
            </Card>
          }
        />
      </Routes>
    );
  }
}
