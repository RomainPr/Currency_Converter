// == Import npm
import React from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Results from 'src/components/Results';

import './app.scss';

// import de nos données statiques
import currenciesList from 'src/data/currencies';

// == Composant
const App = () => (
  <div className="app">
    <Header baseAmount={1} />
    <Currencies currencies={currenciesList} />
    <Results value={1.09} currency="United States Dollar" />
  </div>
);

// == Export
export default App;
