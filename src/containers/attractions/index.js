import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from '../../components';

export class Attractions extends Component {
  static propTypes = {

  }

  render() {
    return (
      <section id="attractions">
        <h3>Attractions <span className="float-right"><button>Show More</button></span></h3>
        {/* TODO: carousel images for attractions */}
        <Carousel />
      </section>
    )
  }
}

export default Attractions;
