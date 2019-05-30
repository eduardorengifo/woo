import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';

import theme, { GlobalStyle } from '../theme';

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <div
        style={{
          padding: '1rem'
        }}
      >
        {story()}
      </div>
    </>
  </ThemeProvider>
));

addDecorator(withKnobs);

configure(loadStories, module);
