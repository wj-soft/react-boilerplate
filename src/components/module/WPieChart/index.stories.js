import React from 'react';
import WPieChart from '.';
import { withKnobs, object } from "@storybook/addon-knobs";

import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 10px;
`;

const defaultValue = [
  {value: 335, name: 'A'},
  {value: 310, name: 'B'},
  {value: 234, name: 'C'},
  {value: 135, name: 'D'},
  {value: 1548, name: 'E'}
]
  
export default {
  title: 'WPieChart',
  component: WPieChart,
  decorators: [withKnobs]
};

export const component = () => (
  <Wrapper>
    <WPieChart
      pieData={object('pieData', defaultValue)}
    >
    </WPieChart>
  </Wrapper>
);

component.story = {
  name: '파이차트',
};
