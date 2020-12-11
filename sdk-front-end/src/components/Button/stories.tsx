/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Button } from './Button';

export default { color: 'primary' } as Meta;

export const StoryBookTest: Story = (args) => <Button {...args} />;

/** Alterar os argumentos do componente para o stories */

// StoryBookTest.args = {
//   title: 'blablabla',
//   description: 'blablabla',
// };

/** */
