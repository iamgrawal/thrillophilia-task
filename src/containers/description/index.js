import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Description extends Component {
  static propTypes = {
    data: PropTypes.objectOf({
      less: PropTypes.string,
      more: PropTypes.string
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    };
  }

  togglePara = () => {
    this.setState({
      showMore: !this.state.showMore
    });
  };

  render() {
    const { showMore } = this.state;
    const { data } = this.props;
    return (
      <section>
        <p>
        <span>{showMore ? data.more : data.less}</span>
        <br /><br />
        <span className="orange clickable" onClick={this.togglePara}>{showMore ? 'Show More' : ' Show Less'}</span>
        </p>
      </section>
    )
  }
}

export default Description;
