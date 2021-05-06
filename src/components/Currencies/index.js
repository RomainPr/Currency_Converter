import React from 'react';
import PropTypes from 'prop-types';

import './currencies.scss';

const Currencies = ({ currencies, onCurrencyClick, isOpen }) => (
  <section className={isOpen ? 'currencies' : 'currencies currencies--hidden'}>
    <h2 className="currencies__title">Currencies</h2>
    <ul className="currencies__list">
      {currencies.map((currency) => (
        // dans le onClick, on veut appeler la prop onCurrencyClick
        // en lui donnant en paramètre la devise (currency.name)
        // on doit faire une fonction anonyme fléchée pour bien donner un callback
        // si l'on avait juste écrit : onClick={onCurrencyClick(currency.name)}
        // Alors le code aurait été exécuté tout de suite, lors du render
        <li
          onClick={() => onCurrencyClick(currency.name)}
          key={currency.name}
          className="currencies__item"
        >
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
  onCurrencyClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Currencies;
