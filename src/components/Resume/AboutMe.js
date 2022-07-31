import React, { Component } from 'react';
import styled from 'styled-components';

export default class AboutMe extends Component {
  render() {
    return (
      <Container>
        <Header>About me</Header>
        <Description>{this.props.profile}</Description>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Header = styled.p`
  text-decoration: underline;
  font-size: 18px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: normal;
`;
