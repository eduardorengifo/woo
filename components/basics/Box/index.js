import styled from 'styled-components';
import {
  space,
  color,
  width,
  flex,
  order,
  alignSelf,
  fontSize
} from 'styled-system';

import { themed } from '../../../lib/utils';

const Box = styled.div`
  box-sizing: border-box;
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${flex}
  ${order}
  ${alignSelf}
  ${themed('Box')}
`;

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...alignSelf.propTypes
};

Box.displayName = 'Box';

export default Box;
