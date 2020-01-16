import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { ClipLoader } from 'react-spinners';
import { DEFAULT_DATA } from '../../config';

class TrendChart extends Component {
  constructor(props) {
    super(props);
    this.state = { chartData: JSON.parse(DEFAULT_DATA) };
  }

  componentDidMount() {
    this.worker = new Worker('../../helpers/workerClient', { type: 'module' });

    this.worker.onmessage = ({ data }) => {
      this.setState({
        chartData: data,
      });
    };

    this.worker.onerror = (error) => {
      console.log(`worker error: ${error}`);
    };

    this.worker.postMessage('start');
  }

  componentWillUnmountMount() {
    this.worker.postMessage('close');
    setTimeout(() => {
      console.log('worker close connection');
      this.worker.terminate();
    }, 200);
  }

  render() {
    const { chartData } = this.state;
    return (
      <div>
        {chartData && chartData.datasets ? (
          <Line
            width={800}
            height={500}
            data={chartData}
            options={{ maintainAspectRatio: false, animation: false }}
          />
        ) : (
          <div>
            <ClipLoader size={150} color="#123abc" loading />
          </div>
        )}
      </div>
    );
  }
}

export default TrendChart;
