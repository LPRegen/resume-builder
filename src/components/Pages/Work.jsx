import React, { Component } from 'react';
import Card from '../Card';
import { withRouter } from '../../utils/withRouter';

class Work extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.navigate('/skills');
  }

  render() {
    return (
      <Card>
        <Card.Title title="Work" />
        <Card.Form handleSubmit={this.handleSubmit}>
          <Card.Label labelTitle="Title">
            <Card.Input
              inputType="text"
              placeholder="Software developer"
              inputName="work-title"
            />
          </Card.Label>
          <Card.Label labelTitle="Company">
            <Card.Input
              inputType="text"
              placeholder="The Home Depot"
              inputName="work-company"
            />
          </Card.Label>
          <Card.Label labelTitle="From">
            <Card.Input
              inputType="number"
              placeholder="2018"
              inputName="work-from"
            />
          </Card.Label>
          <Card.Label labelTitle="To">
            <Card.Input
              inputType="number"
              placeholder="2020"
              inputName="work-to"
            />
          </Card.Label>
          <Card.Wrapper>
            <Card.ButtonAdd direction="previous" text="Previous" />
            <Card.ButtonAdd direction="next" text="Add" />
          </Card.Wrapper>
          <Card.Wrapper primary>
            <Card.Button
              buttonType="button"
              buttonText="Education"
              direction="previous"
              path="/education"
            />
            <Card.Button
              buttonType="submit"
              buttonText="Skills"
              direction="next"
              path="/skills"
            />
          </Card.Wrapper>
        </Card.Form>
      </Card>
    );
  }
}

export default withRouter(Work);
