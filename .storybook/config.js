import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';

import theme, { GlobalStyle } from '../theme';
import { UserAgentProvider } from '../lib/ua';

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <UserAgentProvider value={navigator.userAgent}>
        <div
          style={{
            padding: '1rem'
          }}
        >
          {story()}
        </div>
      </UserAgentProvider>
    </>
  </ThemeProvider>
));

addDecorator(withKnobs);

configure(loadStories, module);
