/* eslint-disable react/destructuring-assignment */
// == Import npm
import React from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Results from 'src/components/Results';
import Toggler from 'src/components/Toggler';

// import de nos données statiques
import currenciesList from 'src/data/currencies';

import './app.scss';

// la classe App hérite de React.Component
// qui est la "classe mère" d'un composant React
class App extends React.Component {
  // si on veut déclarer un state, on doit le faire dans le constructeur
  constructor(props) {
    // super permet de donner a la classe parente (ici React.Component)
    // les parametres du constructeur
    // React.Component a besoin de ces props pour que tout marche bien
    super(props);

    // on déclare notre state avec this.state
    this.state = {
      // est-ce que le menu des devises est affiché
      open: true,
      // la valeur à convertir
      baseAmount: 1,
      selectedCurrency: 'Mexican Peso',
    };

    // contexte explicite :
    // on force la méthode handleClick
    // a avoir comme contexte "this"
    // puisque on définit ce contexte dans le constructeur
    // a ce stade, this a la bonne valeur
    // du coup, handleClick aura le bon contexte
    // meme une fois détachée
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleCurrencyClick = this.handleCurrencyClick.bind(this);
  }

  handleToggleClick() {
    // je veux changer la valeur de "open" dans mon state
    // en React, on ne modifie jamais le state directement.
    // on utilisera toujours la méthode setState
    // cette méthode créera un nouvel état
    // qui sera une copie par valeurs (et non par référence) de l'ancien
    // avec en plus, les modifications demandées
    // ici, on change open, pour qu'il contienne l'inverse de la précédente valeur.
    this.setState({
      open: !this.state.open,
    });
  }

  handleCurrencyClick() {}

  makeConversion() {
    // objectif : convertir la valeur de base
    // dans la devise sélectionnée (this.state.selectedCurrency)

    // on va parcourir le tableau des devises
    // (import currenciesList from 'src/data/currencies')
    // pour trouver l'objet de cette devise
    const foundCurrency = currenciesList.find(
      (currency) => currency.name === this.state.selectedCurrency,
    );
    // ensuite, dans cet objet, on accèdera au taux de conversion (.rate)
    const foundRate = foundCurrency.rate;
    // que l'on multipliera par baseAmount
    const result = this.state.baseAmount * foundRate;

    return Math.round(result * 100) / 100;
  }

  render() {
    const convertedAmount = this.makeConversion();

    return (
      <div className="app">
        <Header baseAmount={this.state.baseAmount} />
        {/*
          Notre premier composant contrôlé !
          Un composant contrôlé a deux props :
          - une donnée en provenance du state
          - une fonction pour modifier cette donnée dans le state
        */}
        <Toggler isOpen={this.state.open} onToggle={this.handleToggleClick} />
        {this.state.open && (
          <Currencies
            onCurrencyClick={this.handleCurrencyClick}
            currencies={currenciesList}
          />
        )}
        <Results
          value={convertedAmount}
          currency={this.state.selectedCurrency}
        />
      </div>
    );
  }
}

// == Export
export default App;
