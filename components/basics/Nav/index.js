import styled from 'styled-components';
import {
  height,
  minHeight,
  borderTop,
  borderBottom,
  borderColor
} from 'styled-system';

import Flex from '../Flex';

const themed = key => props => props.theme[key];

const Nav = styled(Flex)(
  height,
  minHeight,
  borderTop,
  borderBottom,
  borderColor,
  themed('Nav')
);

Nav.propTypes = {
  ...height.propTypes,
  ...minHeight.propTypes
};

Nav.defaultProps = {
  as: 'nav',
  bg: 'primary',
  px: 2,
  minHeight: '3.5rem'
};

export default Nav;
