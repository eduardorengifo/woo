import styled from 'styled-components';
import {
  flexWrap,
  flexDirection,
  alignItems,
  alignContent,
  justifyContent
} from 'styled-system';

import Box from '../Box';
import { themed } from '../../../lib/utils';

const Flex = styled(Box)`
  display: flex;
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${themed('Flex')}
`;

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...alignContent.propTypes,
  ...justifyContent.propTypes
};

Flex.displayName = 'Flex';

export default Flex;
