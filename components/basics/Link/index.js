import styled from 'styled-components';

import Box from '../Box';
import { themed } from '../../../lib/utils';

const Link = styled(Box)`
  ${themed('Link')}
`;

Link.defaultProps = {
  as: 'a',
  color: 'secondary'
};

Link.displayName = 'Link';

export default Link;
