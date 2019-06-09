import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset}
  html {
    background: ${props => props.theme.colors.lightgray};
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fonts.sans};
  }
`;
