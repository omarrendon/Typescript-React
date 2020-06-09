import React from 'react';
import { UserPost as UserPostProps} from '../../zustand/types';

export default React.memo(function UserPost({ title, body }: UserPostProps) {
  return (
    <div style={{ border:"1px solid black", margin:10}}>
      <h3>{title}</h3>
      <h3>{body}</h3>
    </div>
  );
});