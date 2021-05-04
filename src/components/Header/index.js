import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({
  title, input,
}) => (
  <header className="header">
    <h1 className="header__title">{title}</h1>
    <p className="header__input">{input}</p>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
};

export default Header;
