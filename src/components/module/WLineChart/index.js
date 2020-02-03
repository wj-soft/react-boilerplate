import React from 'react';
import ReactEcharts from 'echarts-for-react';

function WLineChart(props) {
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
          type: 'line'
        }]
      }}
    />
  )
}

export default WLineChart;
