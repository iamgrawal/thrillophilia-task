import React, { Component } from 'react';
import './App.css';
import { data } from './utils';

import { Attractions, Banner, Description, Experiences, Faq, Footer, Navbar, QuestionForm, Recommendations, Tags, Tales, ThingsToDo, Tours, TravelGuides } from './containers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    };
  }

  render() {
    return (
      <div className="App">
        <div className="new-destination-page-body">
          <Navbar />
          <Banner />
        </div>
        <main className="container">
          <div className="row">
            <Description data={data.description} />
          </div>
          <div className="row">
            <Recommendations />
          </div>
          <div className="row">
            <ThingsToDo />
          </div>
          <div className="row">
            <Tours />
          </div>
          <div className="row">
            <Attractions />
          </div>
          <div className="row">
            <QuestionForm />
          </div>
          <div className="row">
            <TravelGuides />
          </div>
          <div className="row">
            <Tales />
          </div>
          <div className="row">
            <Experiences />
          </div>
          <div className="row">
            <Tags id="moreThingsToDo" header={'More Things to do in Srilanka'} />
          </div>
          <div className="row">
            <Tags id="topAttractions" header={'Top Srilanka Attractions'} />
          </div>
          <div className="row">
            <Tags id="popularPlaces" header={'Most Popular Places Around Srilanka'} />
          </div>
          <div className="row">
            <Tags id="listings" header={'Listings in Srilanka'} />
          </div>
          <div className="row">
            <Faq />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
