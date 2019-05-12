import React from 'react';

import PanelLayout from '../layouts/Panel';
import { Flex, Box } from '../components/basics';
import ProductCard from '../components/ui/Product/Card';

const numbers = Array.from(Array(48).keys());

export default () => (
  <PanelLayout>
    <Flex flexWrap="wrap" px={-2} my={3}>
      {numbers.map(number => (
        <Box key={number} width={[1 / 2, 1 / 4, 1 / 6, 1 / 8]} mb={3} px={2}>
          <ProductCard
            product={{
              name: `Product ${number}`,
              price: 'S/ 400',
              priceDiscount: 'S/ 200',
              image: 'https://source.unsplash.com/random/225x150'
            }}
          />
        </Box>
      ))}
    </Flex>
  </PanelLayout>
);
