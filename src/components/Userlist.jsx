// import React, { useEffect, useState } from 'react'

import HOC from "./HOC";

const Userlist = ({data}) => {
    const renderdata = data.map((user) => {
        return (
            <div key={user.id}>
            <p>{user.name}</p>
            </div>
        );
    })

  return (
    <div>{renderdata}</div>
  )
}

const SearchUser = HOC(Userlist, "users");
export default SearchUser;
