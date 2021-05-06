import React from 'react';
import PropTypes from 'prop-types';

import './currencies.scss';

const Currencies = ({ currencies, onCurrencyClick }) => (
  <section className="currencies">
    <h2 className="currencies__title">Currencies</h2>
    <ul className="currencies__list">
      {
        currencies.map((currency) => (
          <li
            onClick={onCurrencyClick}
            key={currency.name}
            className="currencies__item"
          >
            {currency.name}
          </li>
        ))
      }
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
  onCurrencyClick: PropTypes.func.isRequired,
};

export default Currencies;
