import React from 'react';
import { Card, Text, Flex, Image } from '../../../basics';

export const StyledProductCard = props => <Card bg="white" {...props} />;

export const Picture = props => <Image borderRadius="4px 4px 0 0" {...props} />;

export const Name = props => <Text px={2} pt={2} fontSize={1} {...props} />;

export const PriceDiscount = props => (
  <Text fontSize={2} fontWeight={500} {...props} />
);

export const Price = props => (
  <Text
    fontSize={0}
    fontWeight={100}
    css={{ textDecorationLine: 'line-through' }}
    {...props}
  />
);

export const Content = props => (
  <Flex p={2} justifyContent="space-between" alignItems="center" {...props} />
);
