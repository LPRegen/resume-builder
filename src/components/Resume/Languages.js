import React, { Component } from 'react';
import styled from 'styled-components';

export default class Languages extends Component {
  render() {
    return (
      <Container>
        <Header>Languages</Header>
        {/* eslint-disable-next-line */}
        {this.props.languages.map((language, index) => {
          if (index !== 0 && language.name) {
            return (
              <Language key={index}>
                {language.name}: {language.level}
              </Language>
            );
          }
        })}
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
  font-weight: 500;
  text-decoration: underline;
  font-size: 18px;
`;

const Language = styled.p`
  font-size: 14px;
`;
