import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from './index';
import README from './README.md';

storiesOf('Basics|Image').add(
  'default',
  () => (
    <Image
      width={[1, 1, 1 / 2]}
      src="https://source.unsplash.com/random/1280x720"
      borderRadius={8}
    />
  ),
  {
    notes: {
      markdown: README
    }
  }
);
