import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class QuestionForm extends Component {
  static propTypes = {
    props: PropTypes.object
  }

  render() {
    return (
      <div className="col-md-12 user-question" id="ask-question" style={{marginTop: '20px'}}>
        <div className="container-fluid" style={{padding: '0'}}>
          <div className="row">
            <p className="recommendation-text pull-left" style={{fontSize: '18px', paddingLeft: '10px'}}>Ask a Question</p>
          </div>
          <div className="row enquiry_now" style={{padding: '20px', paddingLeft: '10px'}}>
            <form className="simple_form new_ugc_snippet_question" id="simple_form new_ugc_snippet_question" style={{width: '100%'}}>
              <div className="details">
                <div className="control-group text required ugc_snippet_question_title">
                  <div className="controls">
                    <textarea className="text required" cols="40" placeholder="Please write your question here" rows="20"/>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="right">
                  <input className="btn_green js-publish-review" id="loginButton" name="commit" type="submit" style={{background: 'rgb(241, 111, 48)'}}/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionForm;
