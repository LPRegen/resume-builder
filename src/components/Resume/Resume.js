import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

export default class Resume extends Component {
  render() {
    return (
      <Container>
        <Header
          first={this.props.first}
          last={this.props.last}
          title={this.props.title}
        />
        <Sidebar
          website={this.props.website}
          email={this.props.email}
          location={this.props.location}
          phone={this.props.phone}
          skills={this.props.skills}
          languages={this.props.languages}
        />
        <MainContent
          profile={this.props.profile}
          education={this.props.education}
          work={this.props.work}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  display: grid;
  grid: 1fr 5fr / 2fr 5fr;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 1rem;
  overflow: auto;
`;
