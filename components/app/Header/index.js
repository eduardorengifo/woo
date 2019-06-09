import React from 'react';
import { Menu, Search } from 'styled-icons/boxicons-regular';

import { Nav, Button } from '../../basics';
import Logo from '../../../static/svg/logo/dark.svg';

export default ({ onMenu }) => (
  <Nav
    as="header"
    bg="primary"
    justifyContent="space-between"
    alignItems="center"
    borderBottom="1px solid"
    borderColor="border"
    css={{
      svg: {
        width: '25px',
        height: '25px'
      }
    }}
  >
    <Button data-cy="menu" px={0} py={0} onClick={onMenu}>
      <Menu />
    </Button>
    <Logo />
    <Search />
  </Nav>
);
