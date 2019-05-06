import React from 'react';
import { Menu, Search } from 'styled-icons/boxicons-regular';

import { Nav } from '../../basics';
import Logo from '../../../static/svg/logo/dark.svg';

export default () => (
  <Nav
    as="header"
    justifyContent="space-between"
    alignItems="center"
    borderBottom="1px solid"
    borderColor="border"
    css={{
      '& > svg': {
        width: '25px',
        height: '25px'
      }
    }}
  >
    <Menu />
    <Logo />
    <Search />
  </Nav>
);
