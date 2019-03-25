import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../card';

export class Carousel extends Component {
  static propTypes = {
    props: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state={
      page: 0
    }
  }

  showCards = () => {
    const index = this.state.page * 4;
    const result = [];
    for(var i=0; i < 4; i++){
      result.push(<Card key={`${index}-${i}`} />);
    }
    return result;
  }

  render() {
    return (
      <div className="carousel slide">
        <div className="carousel-inner">
          <div className="item active" style={{minHeight: '450px'}}>
            {this.showCards()}
          </div>
        </div>
        <div class="carousel-control left" style={{backgroundImage: 'none', left: '-90px', color: '#f16f32', width: '10%', opacity: '1'}}>
          <span style={{fontsize: '72px'}}><i class="fa fa-angle-left" /></span>
        </div>
        <div class="carousel-control right" style={{backgroundImage: 'none', right: '-90px', color: '#f16f32', width: '10%', opacity: '1'}}>
          <span style={{fontsize: '72px'}}><i class="fa fa-angle-right" /></span>
        </div>
      </div>
    )
  }
}

export default Carousel;