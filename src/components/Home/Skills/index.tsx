/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import * as React from 'react';

import * as Shared from '../../shared/exports';
import SkillElement from './element';

interface ISkillsProps {
  data : string []
}

const Skills: React.FunctionComponent<ISkillsProps> = ({ data }) => (
  <div>
    <Shared.BlockTitle>SKILLS</Shared.BlockTitle>
    <div className="grid gap-4 mt-6">
      {data.map((e, ind) => <div key={ind}><SkillElement data={e} /></div>)}
    </div>
  </div>
);

export default Skills;
