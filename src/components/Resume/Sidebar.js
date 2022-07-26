import React, { Component } from 'react';
import styled from 'styled-components';

import Contact from './Contact';
import Languages from './Languages';
import Skills from './Skills';

export default class Sidebar extends Component {
  render() {
    return (
      <StyledSidebar>
        <Contact
          website={this.props.website}
          email={this.props.email}
          location={this.props.location}
          phone={this.props.phone}
        />
        <Skills skills={this.props.skills} />
        <Languages languages={this.props.languages} />
      </StyledSidebar>
    );
  }
}

const StyledSidebar = styled.div`
  grid-column: 1/2;
  grid-row: 2/5;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 1.5rem;
`;
