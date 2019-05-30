import React from 'react';

import Mask from '../Mask';
import { Position, Nav, Text } from '../../basics';

export default ({ title, visible, width, onClose, children }) => (
  <Mask visible={visible} onClick={onClose}>
    <Position
      width={width}
      bg="background"
      position="fixed"
      height="100%"
      zIndex="3"
      css={{
        boxShadow: '2px 0 8px rgba(0,0,0,0.15)',
        transition: 'transform .3s cubic-bezier(.7, .3, .1, 1)',
        overflow: 'auto'
      }}
      style={{
        transform: visible ? null : 'translateX(-100%)'
      }}
    >
      {title ? (
        <Nav alignItems="center" borderBottom="1px solid" borderColor="border">
          <Text>{title}</Text>
        </Nav>
      ) : null}
      {children}
    </Position>
  </Mask>
);
