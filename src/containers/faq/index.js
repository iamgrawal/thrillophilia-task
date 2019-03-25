import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { QnA } from '../../components';
import { data } from '../../utils';

export class Faq extends Component {
  static propTypes = {
    props: PropTypes.object
  }

  render() {
    return (
      <section id="faq">
        <h3>What You Should Know More About Srilanka</h3>
        {/* TODO: tags for popularPlaces */}
        {data.faq.map(item => <QnA question={item.ques} answer={item.ans} />)}
      </section>
    )
  }
}

export default Faq;