import React from 'react';
import PropTypes from 'prop-types';

import './results.scss';

const Results = ({ currencies }) => (
  <section className="result">
    {currencies.map((currency) => (
      <div>
        <p className="result__value">{currency.rate}</p>
        <p className="result__currency">{currency.name}</p>
      </div>
    ))}
  </section>
);

Results.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      rate: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Results;
