import React, { Component } from 'react';
import styled from 'styled-components';

export default class Education extends Component {
  render() {
    return (
      <div>
        <Header>Education</Header>
        {/* eslint-disable-next-line */}
        {this.props.education.map((education, index) => {
          if (index !== 0 && education.degree) {
            return (
              <Container key={index}>
                <Title>{education.degree}</Title>
                <FromTo>
                  {education.from} - {education.to}
                </FromTo>
                <University>{education.university}</University>
              </Container>
            );
          }
        })}
      </div>
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
  font-weight: 500;
`;

const University = styled.p`
  font-size: 14px;
  font-weight: normal;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: normal;
  text-decoration: underline;
  padding-top: 1rem;
`;

const FromTo = styled.p`
  font-size: 11px;
  font-weight: lighter;
`;
