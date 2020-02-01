import React from 'react';
import PButton from '.';

export default {
  title: 'PButton',
  component: PButton,
  parameters: {
    componentSubtitle: '서브타이틀 영역'
  }
};

export const component = () => <PButton>hello</PButton>;

component.story = {
  name: '버튼',
};
