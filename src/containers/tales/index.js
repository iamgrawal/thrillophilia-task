import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Card } from '../../components';

export class Tales extends Component {
  static propTypes = {

  }

  render() {
    return (
      <section id="tales">
        <h3>Traveller Tales from Srilanka</h3>
        <div className="row">
          <div className="col-md-12" style={{display: 'flex', flexDirection: 'row', flex: '0  1 auto', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
            <Card /> <Card />
          </div>
        </div>
      </section>
    )
  }
}

export default Tales;
