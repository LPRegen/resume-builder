import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

export default class Resume extends Component {
  render() {
    let state = this.props.state;
    return (
      <Container>
        <Header
          first={state.information.first}
          last={state.information.last}
          title={state.information.title}
        />
        <Sidebar
          website={state.contact.website}
          email={state.contact.email}
          location={state.contact.location}
          phone={state.contact.phone}
          skills={state.skills}
          languages={state.languages}
        />
        <MainContent
          profile={state.information.profile}
          education={state.education}
          work={state.work}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  display: grid;
  grid: 1fr 5fr / 2fr 5fr;
  width: 100%;
  height: 87%;
  background-color: white;
  overflow: auto;
  border-radius: 10px;

  @media print {
    break-after: auto;
  }

  @page {
    padding: 1rem 0;
  }
`;
