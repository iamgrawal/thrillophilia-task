import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Ratings, PageHeader } from '../../components';
import banner from '../../assets/images/Banner.webp'

export class Banner extends Component {
  static propTypes = {
    props: PropTypes.object
  }

  render() {
    return (
      <section>
        <div className="container-fluid slider-container carousel">
          <div className="item carousel-inner">
            <img className="img-responsive" src={banner} alt="banner" />
            <div className="carousel-caption destination-banner-title">
              <h1>Srilanka</h1>
              <h4>Experiential journeys will make you a storyteller</h4>
            </div>
          </div>
        </div>
        <div className="container-fluid user-review-section">
          <div className="row">
            <div className="col-md-12">
              <div className="jumbotron">
                <div className="row">
                  <div className="col-md-4 col-md-offset-1">
                    <p>User Reviews</p>
                    <Ratings rating={4} count={2} />
                  </div>
                  <div className="col-md-7" >
                    <p>Top Trusted Travel Brand</p>
                    <p>
                      {/* TODO: write logic for brands */}
                    </p>
                  </div>
                </div>
              </div>
              <PageHeader />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Banner;