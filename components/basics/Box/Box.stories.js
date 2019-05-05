import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from './index';
import README from './README.md';

const stories = storiesOf('Basics|Box');

stories.add(
  'default',
  () => {
    return (
      <Box p={5} fontSize={4} width={[1, 1, 1 / 2]} color="white" bg="primary">
        Box
      </Box>
    );
  },
  {
    notes: {
      markdown: README
    }
  }
);
