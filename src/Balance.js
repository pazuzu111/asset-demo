import React, {Component} from 'react'

const Balance = props => {
    return (
        <div className="coinInfo">
            <h1 className="App-title">{props.coin.toUpperCase()} <span className="flash">listening for updates...</span></h1>

            <p>current price: <span>{props.price} USD/{props.coin.toUpperCase()}</span></p>
            <p>holding: <span>{props.shares} {props.coin}</span></p>
            <p>{props.coin} balance: <span>${(props.shares * props.price).toFixed(2)}</span></p>
            <br/>
        </div>
    )
}

export default Balance
