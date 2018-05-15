import React, { Component } from 'react';
import Balance from './Balance.js'
import Chart from './Chart.js'

import './App.css';

export default class App extends Component {
    constructor() {
        super()
        this.state = {
          btc: 2,
          eth: 3,
          eos: 100,
          btcPrice: null,
          ethPrice: null,
          eosPrice: null
        }
    }

    componentDidMount() {

        //initialize price state
        this.getStockPrice()

        //fetch prices every 5 seconds
        setInterval(() => {
            this.getStockPrice()
        }, 5000)
    }

    //fetch USD prices and set state
    getStockPrice = () => {
        fetch('https://api.coingecko.com/api/v3/coins')
        .then(res => res.json())
        .then(res => {
            this.setState({
                btcPrice: res[0].market_data.current_price.usd.toFixed(2),
                ethPrice: res[1].market_data.current_price.usd.toFixed(2),
                eosPrice: res[2].market_data.current_price.usd.toFixed(2)
            })
        })
    }

    render() {

        //coins to render
        let btc = <Balance coin="btc" shares={this.state.btc} price={this.state.btcPrice} />
        let eth = <Balance coin="eth" shares={this.state.eth} price={this.state.ethPrice} />
        let eos = <Balance coin="eos" shares={this.state.eos} price={this.state.eosPrice} />

        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">PORTFOLIO assets</h1>
                </header>

                <Chart />

                <div className='balance'>
                    {btc}
                    {eth}
                    {eos}
                </div>
            </div>
        )
    }
}
