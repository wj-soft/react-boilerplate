import React from 'react';
import WBarChart from '.';
import { withKnobs, array } from "@storybook/addon-knobs";

import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 10px;
`;

export default {
  title: 'WBarChart',
  component: WBarChart,
  decorators: [withKnobs]
};


export const component = () => (
  <Wrapper>
    <WBarChart
      xAxis={array('xAxis', [1,2,3,4,5])}
      yAxis={array('yAxis', [1,2,3,4,5])}
    >
    </WBarChart>
  </Wrapper>
);

component.story = {
  name: '바차트',
};
