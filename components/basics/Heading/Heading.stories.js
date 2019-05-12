import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Heading from './index';
import README from './README.md';

storiesOf('Basics|Heading', module).add(
  'default',
  () => {
    const content = text('Text', 'Heading');
    return <Heading>{content}</Heading>;
  },
  {
    notes: {
      markdown: README
    }
  }
);
