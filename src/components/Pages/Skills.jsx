import React, { Component } from 'react';
import Card from '../Card';
import { withRouter } from '../../utils/withRouter';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.navigate('/languages');
  }

  render() {
    return (
      <Card>
        <Card.Title title="Skills" />
        <Card.Form handleSubmit={this.handleSubmit}>
          <Card.Skills placeholder="Team player" />
          <Card.Skills placeholder="Resilient" />
          <Card.Skills placeholder="Empathetic" />
          <Card.Skills placeholder="Problem solving" />
          <Card.Skills placeholder="Communication" />
          <Card.Wrapper>
            <Card.ButtonAdd direction="previous" text="Previous" />
            <Card.ButtonAdd direction="next" text="Add" />
          </Card.Wrapper>
          <Card.Wrapper primary>
            <Card.Button
              buttonType="button"
              buttonText="Work"
              direction="previous"
              path="/work"
            />
            <Card.Button
              buttonText="Languages"
              direction="next"
              path="/languages"
            />
          </Card.Wrapper>
        </Card.Form>
      </Card>
    );
  }
}

export default withRouter(Skills);
