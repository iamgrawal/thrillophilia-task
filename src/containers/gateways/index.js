import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from '../../components';

export class Gateways extends Component {
  static propTypes = {

  }

  render() {
    return (
      <section id="gateways">
        <h3>Nearby Gateways from Srilanka</h3>
        {/* TODO: carousel images for gateways */}
        <Carousel />
      </section>
    )
  }
}

export default Gateways;
