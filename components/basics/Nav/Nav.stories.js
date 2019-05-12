import React from 'react';
import { storiesOf } from '@storybook/react';

import Nav from './index';
import Box from '../Box';
import README from './README.md';

storiesOf('Basics|Nav', module).add(
  'default',
  () => (
    <Nav
      as="header"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid"
      borderColor="border"
    >
      <Box>Item</Box>
      <Box>Item</Box>
      <Box>Item</Box>
    </Nav>
  ),
  {
    notes: {
      markdown: README
    }
  }
);
