import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import CustomIframe from '../Resume/CustomIframe';
import Card from '../Card';
import Resume from '../Resume/Resume';
import styled from 'styled-components';
import { colors } from '../theme';

export default class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.userInformation,
    };
  }

  render() {
    return (
      <Card>
        <Card.Title title="Summary" />
        <CustomIframe>
          <Resume
            ref={(el) => (this.componentRef = el)}
            first={this.state.information.first}
            last={this.state.information.last}
            title={this.state.information.title}
            website={this.state.contact.website}
            email={this.state.contact.email}
            location={this.state.contact.location}
            phone={this.state.contact.phone}
            skills={this.state.skills}
            languages={this.state.languages}
            profile={this.state.information.profile}
            education={this.state.education}
            work={this.state.work}
          />
        </CustomIframe>

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
              return <StyledButton href="#">Print Resume</StyledButton>;
            }}
            content={() => this.componentRef}
          />
        </Card.Wrapper>
      </Card>
    );
  }
}

const StyledButton = styled.button`
  all: unset;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 0.3rem;
  background-color: ${colors.bgSecondary};
  color: ${colors.primaryText};
  border-radius: 20px;
  cursor: pointer;
  min-width: 120px;
  font-size: 14px;
`;
