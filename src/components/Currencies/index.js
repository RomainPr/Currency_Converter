import React from 'react';
import PropTypes from 'prop-types';

import './currencies.scss';

const Currencies = ({ currencies }) => (
  <section>
    <ul className="currencies">
      <h2 className="currencies__title">Currencies</h2>
      {currencies.map((currency) => (
        <li key={currency.name} className="currencies__item">
          {currency.name}
        </li>
      ))}
    </ul>
  </section>
);

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Currencies;
