import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Text from './index';
import README from './README.md';

storiesOf('Basics|Text')
  .addDecorator(withKnobs)
  .add(
    'default',
    () => {
      const content = text('Text', 'Text');
      return <Text>{content}</Text>;
    },
    {
      notes: {
        markdown: README
      }
    }
  );
