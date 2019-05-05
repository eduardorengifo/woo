import React from 'react';
import { storiesOf } from '@storybook/react';

import Flex from './index';
import Box from '../Box';
import README from './README.md';

storiesOf('Basics|Flex', module).add(
  'default',
  () => (
    <Flex>
      <Box p={3} width={1 / 2} color="white" bg="secondary">
        Flex
      </Box>
      <Box p={3} width={1 / 2} color="white" bg="primary">
        Box
      </Box>
    </Flex>
  ),
  {
    notes: {
      markdown: README
    }
  }
);
