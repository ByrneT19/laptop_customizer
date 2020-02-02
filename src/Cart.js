import React, { Component } from 'react'
// import SummaryItems from 'SummaryItems'

class Cart extends Component {  
        USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    render () {
      
        const summary = Object.keys(this.state.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.state.selected[feature];
        const total = Object.keys(this.state.selected).reduce(
            (acc, curr) => acc + this.state.selected[curr].cost,
            0
      );
  
        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {this.USCurrencyFormat.format(selectedOption.cost)}
            </div>
          </div>
        );
      });
  
    }
}

export default Cart
