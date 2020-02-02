import React, { Component } from 'react'
import slugify from 'slugify';

export class Main extends Component {
  render() {

      updateFeature = (feature, newValue) => {
        const selected = Object.assign({}, this.state.selected);
        selected[feature] = newValue;
        this.setState({
          selected
        });
      };

        const features = Object.keys(this.props.features).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          const options = this.props.features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
              <div key={itemHash} className="feature__item">
                <input
                  type="radio"
                  id={itemHash}
                  className="feature__option"
                  name={slugify(feature)}
                  checked={item.name === this.state.selected[feature].name}
                  onChange={e => this.updateFeature(feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                  {item.name} ({this.USCurrencyFormat.format(item.cost)})
                </label>
              </div>
            );
          });
    
          return (
            <fieldset className="feature" key={featureHash}>
              <legend className="feature__name">
                <h3>{feature}</h3>
              </legend>
              {options}
            </fieldset>
          );
        });
    }
}

export default Main
