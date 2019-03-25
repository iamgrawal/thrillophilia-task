import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Carousel } from '../../components';

export class Experiences extends Component {
  static propTypes = {

  }

  render() {
    return (
      <section id="experiences">
        <h3>Srilanka Experiences</h3>
        {/* TODO: carousel images for experiences */}
        <Carousel />
      </section>
    )
  }
}

export default Experiences;
