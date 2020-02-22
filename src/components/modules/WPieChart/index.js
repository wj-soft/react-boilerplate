import React from 'react';
import ReactEcharts from 'echarts-for-react';

function WPieChart(props) {
  return (
    <ReactEcharts
      option={{
        series: [{ 
          data: props.pieData,
          type: 'pie'
        }]
      }}
    />
  )
}

export default WPieChart;
