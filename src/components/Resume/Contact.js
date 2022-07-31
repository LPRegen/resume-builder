import React, { Component } from 'react';
import styled from 'styled-components';

export default class Contact extends Component {
  render() {
    return (
      <Container>
        <Header>Contact</Header>
        <Description>{this.props.website}</Description>
        <Description>{this.props.email}</Description>
        <Description>{this.props.location}</Description>
        <Description>{this.props.phone}</Description>
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
  font-weight: bold;
  text-decoration: underline;
  font-size: 18px;
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: normal;
`;
