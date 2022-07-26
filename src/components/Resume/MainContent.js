import React, { Component } from 'react';
import styled from 'styled-components';

import AboutMe from './AboutMe';
import Education from './Education';
import Work from './Work';

export default class MainContent extends Component {
  render() {
    return (
      <Container>
        <AboutMe profile={this.props.profile} />
        <Education education={this.props.education} />
        <Work work={this.props.work} />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem 1rem 1rem 1rem;
`;
