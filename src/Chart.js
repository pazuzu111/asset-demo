import React, {Component} from 'react';
import c3 from 'c3';

export default class Chart extends Component {
    constructor() {
        super()
    }

    componentDidMount() {

        //render chart
        this.renderChart();
    }

    renderChart = () => {

        //use c3 to generate chart
        let chart = c3.generate({
          data: {
              columns: [
                  ['BTC', 300, 350, 300, 0, 0, 0],
                  ['ETH', 130, 100, 140, 200, 150, 50],
                  ['EOS', 30, 10, 140, 20, 150, 0]
              ]
          }
        })
    }

  render() {
    return <div id="chart"></div>
  }
}
