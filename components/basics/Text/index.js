import styled from 'styled-components';
import {
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing
} from 'styled-system';

import Box from '../Box';

const themed = key => props => props.theme[key];

const Text = styled(Box)`
  ${fontFamily}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${letterSpacing}
  ${themed('Text')}
`;

Text.propTypes = {
  ...fontFamily.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...letterSpacing.propTypes
};

Text.displayName = 'Text';

export default Text;
