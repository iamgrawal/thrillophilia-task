import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tag } from '../../components';
import { data } from '../../utils'; 

export class Tags extends Component {
  static propTypes = {
    id: PropTypes.string
  }

  render() {
    return (
      <section id={this.props.id}>
        <div className="row">
          <h3>{this.props.header}</h3>
        </div>
        <div className="row">
          <div className="col-md-12" style={{display: 'block'}}>
            <p>
              {data[this.props.id].map(item => <Tag value={item} />)}
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default Tags
