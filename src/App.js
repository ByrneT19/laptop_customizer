import React, { Component } from 'react';
import FeaturesList from 'FeaturesList';
import Cart from 'Cart';
import SummaryItems from 'SummaryItems'

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
// import slugify from 'slugify';

import './App.css';

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  render() {

  // updateFeature = (feature, newValue) => {
  //   const selected = Object.assign({}, this.state.selected);
  //   selected[feature] = newValue;
  //   this.setState({
  //     selected
  //   });
  // };

      //cart/summary component
    // This object will allow us to
// easily convert numbers into US dollar values
//   USCurrencyFormat = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD'
// })

//   //creates the items in the main element
//   render() {
//     const features = Object.keys(this.props.features).map((feature, idx) => {
//       const featureHash = feature + '-' + idx;
//       const options = this.props.features[feature].map(item => {
//         const itemHash = slugify(JSON.stringify(item));
//         return (
//           <div key={itemHash} className="feature__item">
//             <input
//               type="radio"
//               id={itemHash}
//               className="feature__option"
//               name={slugify(feature)}
//               checked={item.name === this.state.selected[feature].name}
//               onChange={e => this.updateFeature(feature, item)}
//             />
//             <label htmlFor={itemHash} className="feature__label">
//               {item.name} ({this.USCurrencyFormat.format(item.cost)})
//             </label>
//           </div>
//         );
//       });

//       return (
//         <fieldset className="feature" key={featureHash}>
//           <legend className="feature__name">
//             <h3>{feature}</h3>
//           </legend>
//           {options}
//         </fieldset>
//       );
//     });

    // const summary = Object.keys(this.state.selected).map((feature, idx) => {
    //   const featureHash = feature + '-' + idx;
    //   const selectedOption = this.state.selected[feature];

    //   return (
    //     <div className="summary__option" key={featureHash}>
    //       <div className="summary__option__label">{feature} </div>
    //       <div className="summary__option__value">{selectedOption.name}</div>
    //       <div className="summary__option__cost">
    //         {this.USCurrencyFormat.format(selectedOption.cost)}
    //       </div>
    //     </div>
    //   );
    // });

    // const total = Object.keys(this.state.selected).reduce(
    //   (acc, curr) => acc + this.state.selected[curr].cost,
    //   0
    // );

    //1st component
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            {/* //2nd component */}
            <h2>Customize your laptop</h2>
            <FeaturesList features={this.props.features} />
          </form>
          <section className="main__summary">
            {/* 3rd component */}
            <h2>Your cart</h2>
            <Cart summary={this.props.summary} />
            {/* <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {this.USCurrencyFormat.format(total)}
              </div>
            </div> */}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
