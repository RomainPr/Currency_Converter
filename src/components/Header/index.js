import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ baseAmount, onChangeBaseAmount }) => (
  <header className="header">
    <h1 className="header__title">Converter</h1>
    <input
      className="header__input"
      type="number"
      min="0"
      placeholder="Valeur en euros"
      value={baseAmount}
      onChange={(event) => {
        onChangeBaseAmount(parseInt(event.target.value, 10));
      }}
    />
    <span className="header__currency">€</span>
    <p className="header__amount">{baseAmount} euro</p>
  </header>
);

// Default Props : permet de définir la valeur par défaut d'une propriété
// Si je ne donne pas ma prop dans le JSX du parent, alors cette valeur prendra le pas
// Note : si une propriété est optionelle (et qu'elle a donc une valeur par défaut)
// alors, on ne met pas le .isRequired dans les proptypes
Header.defaultProps = {
  baseAmount: 10,
};

Header.propTypes = {
  baseAmount: PropTypes.number,
  onChangeBaseAmount: PropTypes.func.isRequired,
};

export default Header;
