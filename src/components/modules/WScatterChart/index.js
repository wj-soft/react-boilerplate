import React from 'react';
import ReactEcharts from 'echarts-for-react';

function WScatterChart(props) {
  return (
    <ReactEcharts
      option={{
        xAxis: {},
        yAxis: {},
        series: [{ 
          data: props.scatterData,
          symbolSize: 20,
          type: 'scatter'
        }]
      }}
    />
  )
}

export default WScatterChart;
