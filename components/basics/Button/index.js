import styled from 'styled-components';
import {
  fontWeight,
  borders,
  borderColor,
  borderRadius,
  buttonStyle
} from 'styled-system';

import Box from '../Box';
import { themed } from '../../../lib/utils';

const Button = styled(Box)`
  cursor: pointer;
  appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  text-decoration: none;
  ${fontWeight}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${buttonStyle}
  ${themed('Button')}
`;

Button.propTypes = {
  ...fontWeight.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...buttonStyle.propTypes
};

Button.defaultProps = {
  as: 'button',
  fontSize: 'inherit',
  fontWeight: 'bold',
  m: 0,
  px: 3,
  py: 2,
  color: 'text',
  bg: 'primary',
  border: 0,
  borderRadius: 4
};

Button.displayName = 'Button';

export default Button;
