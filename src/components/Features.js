import React, { Component } from 'react';
import Items from './Items';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class Features extends Component {

    render() {

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
                            checked={item.name === this.props.selected[feature].name}
                            onChange={() => this.props.updateFeature(feature, item)} />
                        <label htmlFor={itemHash} className="feature__label">
                            {item.name} ({USCurrencyFormat.format(item.cost)})
                        </label>
                    </div>
                )
            })

            return (
                <div key={featureHash}>
                    {features}
                    {featureHash}
                    {options}
                    <Items
                        features={this.props.features}
                        featureHash={this.props.featureHash}
                        options={this.props.options}
                    />
                </div>
            )
        })
        return features
    }

}

export default Features;

