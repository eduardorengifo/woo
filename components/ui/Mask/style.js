import styled, { css } from 'styled-components';

import { Position } from '../../basics';
import { maskFadeIn } from '../../../theme/keyframes';

export default styled(Position)`
  opacity: 0;
  transition: opacity 0.3s linear, height 0s ease 0.3s;
  ${props =>
    props.visible &&
    css`
      height: 100%;
      opacity: 0.3;
      transition: none;
      animation: ${maskFadeIn} 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
    `}
`;
