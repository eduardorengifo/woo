import React from 'react';
import { storiesOf } from '@storybook/react';

import Flex from './index';
import Box from '../Box';
import README from './README.md';

storiesOf('Basics|Flex', module).add(
  'default',
  () => (
    <Flex>
      <Box px={3} py={5} width={1 / 2} color="primary" bg="secondary">
        Flex
      </Box>
      <Box px={3} py={5} width={1 / 2} color="secondary" bg="primary">
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
