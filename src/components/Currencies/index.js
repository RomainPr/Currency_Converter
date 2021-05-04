import React from 'react';
import PropTypes from 'prop-types';

import Currency from './currency';

import './currencies.scss';

const Currencies = ({ currencies }) => (
  <section className="currencies">
    <h2 className="currencies__title">Currencies</h2>
    <ul className="currencies__list">
      {currencies.map((currency) => (
        <Currency
          key={currency.name}
          {...currency}
        />
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
