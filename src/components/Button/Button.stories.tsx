import React from 'react';

import { Story } from '@storybook/react';
import Button, { Props } from './Button';

// export const Primary = () => <Button >Button</Button>;

export default {
  title: 'Component/Button/Template',
  component: Button,
  argTypes: {
    children: "Bouton",
  },
};
//👇 We create a “template” of how args map to rendering
export const Template: Story<Props> = (args) =>
  <Button {...args} >Boutton</Button>;

export const Default = Template.bind({});

Default.args = {
}