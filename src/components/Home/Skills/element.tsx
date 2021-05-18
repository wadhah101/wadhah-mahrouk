/* eslint-disable react/prop-types */
import * as React from 'react';

import ReactMarkdown from 'react-markdown';

interface ISkillElementProps {
  data : string
}

const Ul: React.FC = ({ children }) => <ul className="flex flex-wrap">{children}</ul>;
const Li : React.FC = ({ children }) => (
  <li className="">
    {children}
  </li>
);

const H2 : React.FC = ({ children }) => (
  <h3 className="font-semibold capitalize ">
    {children}
  </h3>
);

const SkillElement: React.FunctionComponent<ISkillElementProps> = ({ data }) => (
  <div>
    <ReactMarkdown components={{ ul: Ul, li: Li, h2: H2 }}>
      {data}
    </ReactMarkdown>
  </div>
);

export default SkillElement;
