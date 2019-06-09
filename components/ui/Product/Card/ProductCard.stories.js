import React from 'react';
import { storiesOf } from '@storybook/react';

import ProductCard from './index';
import { Box } from '../../../basics';

storiesOf('UI|Product/Card', module).add('default', () => (
  <Box width={152}>
    <ProductCard
      product={{
        name: 'Lorem ipsum',
        price: 'S/ 400',
        priceDiscount: 'S/ 200',
        image:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
      }}
    />
  </Box>
));
