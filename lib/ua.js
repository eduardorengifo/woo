import React, { useState, useEffect } from 'react';
import UAParser from 'ua-parser-js';

const UserAgentContext = React.createContext(null);

export const UserAgent = UserAgentContext.Consumer;

export const UserAgentProvider = ({ value, children }) => {
  const initUA = new UAParser(value).getResult();
  const [ua, setUA] = useState(initUA);

  useEffect(() => {
    if (ua.ua !== value) {
      const currentUA = new UAParser(value).getResult();
      setUA(currentUA);
    }
  });

  return (
    <UserAgentContext.Provider value={ua}>{children}</UserAgentContext.Provider>
  );
};

export const withUserAgent = Comp =>
  class extends React.PureComponent {
    static async getInitialProps(ctx) {
      let initialProps = {};

      if (Comp.getInitialProps) {
        initialProps = await Comp.getInitialProps(ctx);
      }

      return initialProps;
    }

    render() {
      return <UserAgent>{ua => <Comp ua={ua} {...this.props} />}</UserAgent>;
    }
  };
