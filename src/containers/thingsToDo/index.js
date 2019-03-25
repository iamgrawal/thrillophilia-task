import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from '../../components';

export class ThingsToDo extends Component {
  static propTypes = {

  }

  render() {
    return (
      <section id="thingsToDo">
        <h3>Things to do in Srilanka</h3>
        {/* TODO:  carousel images for things to do*/}
        <Carousel />
      </section>
    )
  }
}

export default ThingsToDo;
