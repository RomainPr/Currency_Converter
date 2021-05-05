import React from 'react';
import PropTypes from 'prop-types';

import './toggler.scss';

const Toggler = ({ isOpen, onToggle }) => (
  <button
    onClick={onToggle}
    className={isOpen ? 'toggler toggler--open' : 'toggler'}
    type="button"
  >
    =
  </button>
);

Toggler.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  // on déclare notre state avec this.state
  onToggle: PropTypes.func.isRequired,
};

export default Toggler;
