import React from 'react';
import ReactEcharts from 'echarts-for-react';

function WBarChart(props) {
  return (
    <ReactEcharts
      option={{
        xAxis: {
          type: 'category',
          data: props.xAxis
        },
        yAxis: {
          type: 'value'
        },
        series: [{ 
          data: props.yAxis,
          type: 'bar'
        }]
      }}
    />
  )
}

export default WBarChart;
