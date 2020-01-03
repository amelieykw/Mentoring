import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { ClipLoader } from 'react-spinners';
import dataConvert from '../../utils/dataConvert';
import fetchWithHeaders from '../../utils/fetchWithHeaders';
import URL from '../../utils/config';
import mockData from '../../utils/mockData';

function TrendChart() {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    async function fetchData() {
      const data = await fetchWithHeaders(URL.PRICES);
      setChartData(data ? dataConvert(data) : dataConvert({ data: mockData }));
    }
    fetchData();
  }, []);

  return (
    <div>
      {chartData && chartData.datasets ? (
        <Line width={800} height={500} data={chartData} options={{ maintainAspectRatio: false }} />
      ) : (
        <div>
          <ClipLoader size={150} color="#123abc" loading />
        </div>
      )}
    </div>
  );
}

export default TrendChart;
