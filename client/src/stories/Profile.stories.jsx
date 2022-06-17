import React from 'react';

import { Profile } from './Profile ';

export default {
  title: 'Components/Profile',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Profile {...args} />;

export const StandardProfile = Template.bind({});
StandardProfile.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
