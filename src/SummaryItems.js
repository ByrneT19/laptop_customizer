import React, { Component } from 'react'

class SummaryItems extends Component {
    render() {
        return (
            <div>
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                        {this.USCurrencyFormat.format(total)}
                    </div>
                </div>
            </div>
        )
    }
}

export default SummaryItems
