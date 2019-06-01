import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Position } from '../../basics';
import { withUserAgent } from '../../../lib/ua';
import StyledMask from './style';

const Mask = ({ visible, bg, ua, children, onClick }) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
      document.body.style['touch-action'] = 'none';
      if (typeof ua.device.type === 'undefined') {
        document.body.style.position = 'relative';
        document.body.style.width = 'calc(100% - 15px)';
      }
    } else {
      document.body.style = null;
    }
  });

  return (
    <Position position="fixed" zIndex={1}>
      <StyledMask
        data-cy="mask"
        position="fixed"
        top={0}
        left={0}
        width="100%"
        height={0}
        zIndex={2}
        bg={bg}
        visible={visible}
        onClick={onClick}
      />
      <Position position="fixed" zIndex={3} width="auto" height="100%">
        {children}
      </Position>
    </Position>
  );
};

Mask.propTypes = {
  visible: PropTypes.bool,
  bg: PropTypes.string,
  onClick: PropTypes.func
};

Mask.defaultProps = {
  visible: true,
  bg: 'secondary',
  onClick() {}
};

Mask.displayName = 'Mask';

export default withUserAgent(Mask);
