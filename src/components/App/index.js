/* eslint-disable react/no-access-state-in-setstate */
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
    this.handleAmountChange = this.handleAmountChange.bind(this);
  }

  // appelée après chaque render
  // c'est a dire, lorsque une prop ou un bout du state changent
  // la méthode componentDidUpdate prend deux parametres
  // les anciennes props avant la modification
  // et l'ancien state avant la modification
  // en d'autres termes, les props et le state du rendu précédent
  componentDidMount() {
  // console.log('Le composant App a été monté');
  }

  componentDidUpdate(prevProps, prevState) {
    // effet de bord : on parle au monde extérieur
    // ici : le titre du document
    // j'ajoute une condition, je ne vais changer le titre de la page,
    // que si la devise selectionnée a changé.
    if (prevState.selectedCurrency !== this.state.selectedCurrency) {
      document.title = `Conversion euros vers ${this.state.selectedCurrency}`;
    }
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

  handleCurrencyClick(currency) {
    // lors du clic sur une devise, je vais modifier mon state
    // pour changer la devise selectionnée
    // note : pas besoin de recopier le state en entier, setState s'en occupe !
    // on donne simplement la ou les clés qui ont changé.
    this.setState({
      selectedCurrency: currency,
    });
  }

  // une fonction qui sera appellée par le composant Header
  // lorsque la valeur sera changée par l'utilisateur
  handleAmountChange(newAmount) {
    this.setState({
      baseAmount: (newAmount),
    });
  }

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
        <Header baseAmount={this.state.baseAmount} onChangeBaseAmount={this.handleAmountChange} />
        {/*
          Notre premier composant contrôlé !
          Un composant contrôlé a deux props :
          - une donnée en provenance du state
          - une fonction pour modifier cette donnée dans le state
        */}
        <Toggler isOpen={this.state.open} onToggle={this.handleToggleClick} />
        {this.state.open && (
          <Currencies
            isOpen={this.state.open}
            selectedCurrency={this.state.selectedCurrency}
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
