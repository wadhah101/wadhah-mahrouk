/* eslint-disable react/prop-types */
import * as React from 'react';

const BlockTitle: React.FunctionComponent<IBlockTitleProps> = ({ children }) => (
  <h2 className="text-2xl font-medium tracking-widest text-black text-opacity-50 uppercase">
    {children}
  </h2>
);

export default BlockTitle;
