import React, { Component } from 'react';
import Card from '../Card';
import { withRouter } from '../../utils/withRouter';

class Languages extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.navigate('/preview');
  }

  render() {
    return (
      <Card>
        <Card.Title title="Languages" />
        <Card.Form handleSubmit={this.handleSubmit}>
          <Card.Label labelTitle="Language">
            <Card.Input
              inputType="text"
              placeholder="German"
              inputName="language"
            />
          </Card.Label>
          <Card.Label labelTitle="Level">
            <Card.Input
              inputType="text"
              placeholder="B1"
              inputName="language"
            />
          </Card.Label>
          <Card.Wrapper>
            <Card.ButtonAdd direction="previous" text="Previous" />
            <Card.ButtonAdd direction="next" text="Add" />
          </Card.Wrapper>
          <Card.Wrapper>
            <Card.Button
              buttonType="button"
              buttonText="Skills"
              direction="previous"
              path="/skills"
            />
            <Card.Button
              buttonType="submit"
              buttonText="Preview"
              direction="next"
              path="/preview"
            />
          </Card.Wrapper>
        </Card.Form>
      </Card>
    );
  }
}

export default withRouter(Languages);
