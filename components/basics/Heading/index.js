import styled from 'styled-components';

import Text from '../Text';
import { themed } from '../../../lib/utils';

const Heading = styled(Text)`
  ${themed('Heading')}
`;

Heading.defaultProps = {
  as: 'h2',
  m: 0,
  fontSize: 4,
  fontWeight: 'bold'
};

Heading.displayName = 'Heading';

export default Heading;
