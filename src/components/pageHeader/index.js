import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PageHeader extends Component {
  static propTypes = {
    props: PropTypes.object
  }

  render() {
    return (
      <div className="col-md-12">
        <ul className="breadcrumbs_wrapper">
          <li><a href="#">Home</a></li>
          <li>Srilanka</li>
        </ul>
      </div>
    )
  }
}

export default PageHeader;
