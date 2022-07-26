import React, { Component } from 'react';
import styled from 'styled-components';

export default class Languages extends Component {
  render() {
    return (
      <Container>
        <Header>Languages</Header>
        {this.props.languages.map((language, index) => {
          if (index !== 0) {
            return (
              <p key={index}>
                {language.name}: {language.level}
              </p>
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
  font-weight: bold;
  text-decoration: underline;
  font-size: 18px;
`;
