import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from '../../components';

export class Tours extends Component {
  static propTypes = {

  }

  render() {
    return (
      <section id="tours">
        <h3>Srilanka Tours</h3>
        {/* TODO: carousel images for tours */}
        <Carousel />
      </section>
    )
  }
}

export default Tours;
