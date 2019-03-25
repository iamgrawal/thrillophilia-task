import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from '../../components/card/index';

export class TravelGuides extends Component {
  static propTypes = {

  }

  render() {
    return (
      <section id="travelGuides">
        <h3>Travel Guides for Srilanka</h3>
        <div className="row">
          <div className="col-md-12" style={{display: 'flex', flexDirection: 'row', flex: '0  1 auto', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
            <Card /> <Card /> <Card /> <Card />
            <Card /> <Card /> <Card /> <Card />
          </div>
        </div>
      </section>
    )
  }
}

export default TravelGuides;
