import styled from 'styled-components';
import { position, zIndex, top, left, right, bottom } from 'styled-system';

import Box from '../Box';
import { themed } from '../../../lib/utils';

const Position = styled(Box)`
  ${position}
  ${zIndex}
  ${top}
  ${right}
  ${bottom}
  ${left}
  ${themed('Position')}
`;

Position.propTypes = {
  ...position.propTypes,
  ...zIndex.propTypes,
  ...top.propTypes,
  ...right.propTypes,
  ...bottom.propTypes,
  ...left.propTypes
};

Position.displayName = 'Position';

export default Position;
