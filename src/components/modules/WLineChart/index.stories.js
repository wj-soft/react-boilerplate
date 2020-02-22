import React from 'react';
import WLineChart from '.';
import { withKnobs, array } from "@storybook/addon-knobs";

import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 10px;
`;

export default {
  title: 'WLineChart',
  component: WLineChart,
  decorators: [withKnobs]
};


export const component = () => (
  <Wrapper>
    <WLineChart
      xAxis={array('xAxis', [1,2,3,4,5])}
      yAxis={array('yAxis', [1,2,3,4,5])}
    >
    </WLineChart>
  </Wrapper>
);

component.story = {
  name: '라인차트',
};
