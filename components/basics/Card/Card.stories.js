import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './index';
import README from './README.md';

storiesOf('Basics|Card', module).add(
  'default',
  () => (
    <Card fontSize={6} fontWeight="bold" width={[1, 1, 1 / 2]} p={5} bg="white">
      Card
    </Card>
  ),
  {
    notes: {
      markdown: README
    }
  }
);
