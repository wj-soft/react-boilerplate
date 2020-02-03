import React from 'react';
import WButton from '.';

export default {
  title: 'WButton',
  component: WButton,
  parameters: {
    componentSubtitle: '서브타이틀 영역'
  }
};

export const component = () => <WButton>hello</WButton>;

component.story = {
  name: '버튼',
};
