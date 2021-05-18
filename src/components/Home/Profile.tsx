import * as React from 'react';

import * as Shared from '../shared/exports';

interface IProfileProps {
}

const Profile: React.FunctionComponent<IProfileProps> = () => (
  <div>
    <Shared.BlockTitle>Profile </Shared.BlockTitle>
    <p className="mt-6">
      Third year software engineering student at
      National Institute of Applied Science and
      Technology.
      Adept at working on web applications and web
      infrastructure.
    </p>
  </div>
);
export default Profile;
