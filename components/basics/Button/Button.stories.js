import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './index';
import Box from '../Box';
import Flex from '../Flex';
import README from './README.md';

const stories = storiesOf('Basics|Button');

stories.add(
  'with text',
  () => {
    return (
      <Flex>
        <Box p={2}>
          <Button onClick={action('button-click')}>Primary</Button>
        </Box>
        <Box p={2}>
          <Button variant="secondary" onClick={action('button-click')}>
            Secondary
          </Button>
        </Box>
        <Box p={2}>
          <Button variant="outline" onClick={action('button-click')}>
            Outline
          </Button>
        </Box>
      </Flex>
    );
  },
  {
    notes: {
      markdown: README
    }
  }
);
