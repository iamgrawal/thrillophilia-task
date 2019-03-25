import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Card extends Component {
  static propTypes = {
    props: PropTypes.object
  }

  render() {
    return (
      <div className={`col-md-3 col-sm-4 col-xs-6`} style={{margin: '6px auto'}} >
        <div className="card">
          <div className="tags">
            <div className="name" style={{color: '#fff', background: 'purple'}}>Featured</div>
          </div>
          <div className="hovereffect">
            <div className="card-image">
              <img alt="Sailing in Bentota in Sri Lanka" src="https://images.thrillophilia.com/image/upload/s--hBiRB1z0--/c_fill,f_auto,fl_strip_profile,h_450,q_auto,w_400/v1/images/photos/000/055/403/original/Almost-Captains.jpg.jpg?1458157823" width="100%" />
            </div>
            <div className="card-content card-content-has-padding">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12 name-tour">
                  <p className="tours-name">
                    <a href="/tours/sailing-in-bentota" target="_blank">Sailing in Bentota in Sri Lanka</a>
                  </p>
                </div>
              </div>
              <div className="desces">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <p className="price">
                      <i className="fa fa-inr rupee-symbol"></i>&nbsp;7500
                    </p>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <p className="review hidden-sm">
                      <i aria-hidden="true" className="fa fa-star star-filled"></i>
                      <i aria-hidden="true" className="fa fa-star star-filled"></i>
                      <i aria-hidden="true" className="fa fa-star star-filled"></i>
                      <i aria-hidden="true" className="fa fa-star star-filled"></i>
                      <i aria-hidden="true" className="fa fa-star star-unfilled"></i>
                    </p>
                  </div>
                </div>
                <div className="clearfix hidden-md hidden-lg"></div>
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <p className="original-price">
                      <i className="fa fa-inr rupee-symbol"></i>&nbsp;8000
                    </p>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-6 ratings">
                    <span className="users-review-count-card pull-right countofreviews">26 ratings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
