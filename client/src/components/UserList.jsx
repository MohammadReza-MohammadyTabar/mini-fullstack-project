import { useContext, useEffect, useState } from 'react';
import { getUsers } from '../api/userApi';
import { appContext } from '../context/AppContext';

const UserList = () => {
  const { userList } = useContext(appContext);
  return (
    <div>
      {userList
        ? userList.map((user) => <p key={user._id}>{user.name}</p>)
        : null}
    </div>
  );
};

export default UserList;
