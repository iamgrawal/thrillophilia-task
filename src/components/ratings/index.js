import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Ratings extends Component {
  static propTypes = {
    props: PropTypes.object
  }

  displayRating = () => {
    let {rating} = this.props;
    const result = [];
    for (var i=0;i<5;i++,rating--) {
      result.push(<i className={`${rating > 0 ? 'fas' : 'far'} fa-star`} />);
    }
    return result;
  }

  render() {
    return (
      <div className={`header-review-count clearfix ${this.props.className}`}>
        {this.displayRating()}
        <span className="orange">  {this.props.count} reviews</span>
      </div>
    )
  }
}

export default Ratings;