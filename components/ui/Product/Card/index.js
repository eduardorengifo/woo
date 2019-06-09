import React from 'react';
import { Heart } from 'styled-icons/boxicons-regular/Heart';

import { Box } from '../../../basics';
import {
  StyledProductCard,
  Picture,
  Name,
  Content,
  PriceDiscount,
  Price
} from './style';

export default ({ product }) => (
  <StyledProductCard>
    <Picture src={product.image} />
    <Name>{product.name}</Name>
    <Content>
      <Box>
        <Heart
          css={{
            width: 30,
            height: 30
          }}
        />
      </Box>
      <Box>
        <PriceDiscount>{product.priceDiscount}</PriceDiscount>
        <Price>{product.price}</Price>
      </Box>
    </Content>
  </StyledProductCard>
);
