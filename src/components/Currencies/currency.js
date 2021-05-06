import React from 'react';
import PropTypes from 'prop-types';

const Currency = ({ name, onCurrencyClick, isActive }) => (
  <li
    onClick={() => onCurrencyClick(name)}
    className={
      isActive ? 'currencies__item currencies__item--active' : 'currencies__item'
    }
  >
    {name}
  </li>
);

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  onCurrencyClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Currency;
