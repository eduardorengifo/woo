import styled from 'styled-components';
import { height, position, zIndex, top, left } from 'styled-system';

import Box from '../Box';
import { themed } from '../../../lib/utils';

const Position = styled(Box)`
  ${height}
  ${position}
  ${zIndex}
  ${top}
  ${left}
  ${themed('Position')}
`;

export default Position;
