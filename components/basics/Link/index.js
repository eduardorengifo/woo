import styled from 'styled-components';

import Box from '../Box';

const themed = key => props => props.theme[key];

const Link = styled(Box)(themed('Link'));

Link.defaultProps = {
  as: 'a',
  color: 'secondary'
};

export default Link;
