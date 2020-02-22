import React from 'react';
import WScatterChart from '.';
import { withKnobs, object } from "@storybook/addon-knobs";

import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 10px;
`;

export default {
  title: 'WScatterChart',
  component: WScatterChart,
  decorators: [withKnobs]
};

const defaultValue = [
  [1,1],
  [10, 8],
  [8, 9],
  [4, 5],
  [9,9]
]


export const component = () => (
  <Wrapper>
    <WScatterChart
      scatterData={object('scatterData', defaultValue)}
    >
    </WScatterChart>
  </Wrapper>
);

component.story = {
  name: '스캐터차트',
};
