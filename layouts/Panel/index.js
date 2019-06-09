import React, { useState } from 'react';

import { Box } from '../../components/basics';
import Header from '../../components/app/Header';
import { Drawer } from '../../components/ui';

export default ({ children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Drawer
        title="Basic Drawer"
        width={280}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      >
        <Box p={2}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Box>
      </Drawer>
      <Header
        onMenu={() => {
          setVisible(true);
        }}
      />
      <main>{children}</main>
    </>
  );
};
