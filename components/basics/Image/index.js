import styled from 'styled-components';
import { height, borderRadius } from 'styled-system';

import Box from '../Box';

const themed = key => props => props.theme[key];

const Image = styled(Box)`
  max-width: 100%;
  height: auto;
  ${height}
  ${borderRadius}
  ${themed('Image')}
`;

Image.propTypes = {
  ...height.propTypes,
  ...borderRadius.propTypes
};

Image.defaultProps = {
  as: 'img',
  m: 0
};

Image.displayName = 'Image';

export default Image;
