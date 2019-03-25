import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Tag extends Component {
  static propTypes = {
    props: PropTypes.object
  }

  render() {
    return (
      <button style={{border: '0.5px solid #f1f1f1', color: '#f16f32',borderRadius: '3px', padding: '6px 12px', display: 'inline-block', margin: '6px'}}>{this.props.value}</button>
    )
  }
}

export default Tag;