import React from 'react';
import PropTypes from 'prop-types';

import './results.scss';

const Results = ({ rate, name }) => (
  <section className="result">
    <div>
      <p className="result__value">{rate}</p>
      <p className="result__currency">{name}</p>
    </div>
  </section>
);

Results.propTypes = {
  rate: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Results;
