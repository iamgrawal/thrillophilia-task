import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from '../../components';

export class Recommendations extends Component {
  static propTypes = {

  }

  render() {
    return (
      <section id="recommendations">
        <h3><span className="orange bold">Thrillophilia</span> Recommendations for Srilanka</h3>
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

export default Recommendations;
