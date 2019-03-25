import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class QnA extends Component {
  static propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string
  }

  render() {
    return (
      <div className="col-md-12" >
        <br />
        <span className="question"><strong>Q. {this.props.question}</strong></span>
        <br /><hr />
        <span className="answer">{this.props.answer}</span>
        <br />
      </div>
    )
  }
}

export default QnA;
