import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Link from './index';
import README from './README.md';

storiesOf('Basics|Link')
  .addDecorator(withKnobs)
  .add(
    'default',
    () => {
      const href = text('Href', 'https://styled-components.com');
      const content = text('Text', 'Link');
      return (
        <Link href={href} target="_blank">
          {content}
        </Link>
      );
    },
    {
      notes: {
        markdown: README
      }
    }
  );
