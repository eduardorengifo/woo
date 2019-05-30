import React from 'react';
import { storiesOf } from '@storybook/react';

import Mask from './index';
import { Flex, Box, Card } from '../../basics';

storiesOf('UI|Mask', module).add('default', () => (
  <>
    <Mask>
      <Flex justifyContent="center" alignContent="center">
        <Card bg="white" p={4} boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)">
          Card in Mask
        </Card>
      </Flex>
    </Mask>
    <Flex>
      <Box px={3} py={260} width={1 / 2} color="primary" bg="secondary">
        Flex
      </Box>
      <Box px={3} py={260} width={1 / 2} color="secondary" bg="primary">
        Box
      </Box>
    </Flex>
  </>
));
