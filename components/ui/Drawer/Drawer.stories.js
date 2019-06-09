import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import Drawer from './index';
import { Box } from '../../basics';

storiesOf('UI|Drawer', module).add('default', () => {
  const visible = boolean('Visible', true);
  return (
    <Drawer title="Basic Drawer" width={280} visible={visible}>
      <Box p={2}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Box>
    </Drawer>
  );
});
