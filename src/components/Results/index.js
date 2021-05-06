import React from 'react';
import PropTypes from 'prop-types';

// Un composant pour faire une belle animation sur le résultat
import CountUp from 'react-countup';

import './results.scss';

const Results = ({ value, currency }) => (
  <section className="result">
    <CountUp
      className="result__value"
      end={value}
      duration={0.5}
      decimals={2}
    />
    <p className="result__currency">{currency}</p>
  </section>
);

Results.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Results;
