import React, { Component } from 'react';
import styled from 'styled-components';

export default class Work extends Component {
  render() {
    return (
      <div>
        <Header>Work Experience</Header>
        {/* eslint-disable-next-line */}
        {this.props.work.map((work, index) => {
          if (index !== 0 && work.title) {
            return (
              <Container key={index}>
                <Title>
                  {work.title}, {work.company}
                </Title>
                <FromTo>
                  {work.from} - {work.to}
                </FromTo>
                <Description>{work.description}</Description>
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
  font-size: 18px;
  font-weight: 500;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: normal;
  padding-top: 1rem;
`;

const FromTo = styled.p`
  font-size: 11px;
  font-weight: lighter;
`;

const Description = styled.p`
  font-weight: normal;
  font-size: 14px;
`;
