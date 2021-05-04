// == Import npm
import React from 'react';

// == Import
import './styles.css';
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Results from 'src/components/Results';

// import de nos données statiques
import data from 'src/data/currencies';

// == Composant
const App = () => (
  <div className="app">
    <Header title="Converter" input="1 euro" />
    <Currencies currencies={data} />
    <Results currencies={data} />
  </div>
);

// == Export
export default App;
