import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  static propTypes = {
    props: PropTypes.object
  }

  render() {
    return (
      <header className="navbar navbar-static-top bs-docs-nav destination-page-navbar" id="top">
        <div className="container-fluid web_top_nav full-size-header">
          <div className="navbar-header"><a href="/"
              className="navbar-brand header_logo_btn destination-page-logo responsive_box"><img
                className="responsive_box_image cld-responsive"
                src="https://images.thrillophilia.com/image/upload/s--8pLHCDF7--/dpr_1.0,w_200/v1/custom_images/photos/000/000/002/original/1508822215_logo2x_updated.png.png?1508822215" />Thrillophilia</a></div>
          <nav className="collapse navbar-collapse" id="bs-navbar">
            <ul className="nav navbar-nav pull_left">
              <li>
                <input id="header_from_page" name="header_from_page" type="hidden" value="https://www.google.com/" />
                <input
                  id="header_item_context_path" name="header_item_context_path" type="hidden"
                  value="/countries/srilanka" />
                <input id="header_activity_redirect_url" name="header_activity_redirect_url"
                  type="hidden" value="" />
                <div className="yamm navbar activities_dropdown">
                  <ul className="nav">
                    <li className="dropdown">
                    <a href="#" className="dropdown-toggle">Getaways</a>
                    </li>
                    <li className="dropdown"><a href="#" className="dropdown-toggle"
                        >Tours</a>
                    </li>
                    <li className="dropdown"><a href="#" className="dropdown-toggle">Activities</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="sign_in home_signin popup-responsive-images"><a href="#"
                  className="header_get_sign_in_btn destination-page-login-btn">Login</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Navbar;
