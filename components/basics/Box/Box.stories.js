import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from './index';
import README from './README.md';

storiesOf('Basics|Box', module).add(
  'default',
  () => (
    <Box p={5} fontSize={4} width={[1, 1, 1 / 2]} bg="primary">
      Box
    </Box>
  ),
  {
    notes: {
      markdown: README
    }
  }
);
