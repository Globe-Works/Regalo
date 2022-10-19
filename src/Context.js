import React, { createContext, useEffect, useState } from 'react';

export const myContext = createContext({});

export default function Context(props) {
  console.log('Context function os runing');
  const [user, setUser] = useState('');

  useEffect(() => {
    fetch('/api/auth', {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
    })
      .then((res) => {
        console.log({ res });
        if (res) {
          let response = res.json();
          return response;
        }
      })
      .then((response) => {
        setUser(response.userId);
      });
  }, [user]);

  return <myContext.Provider value={user}>{props.children}</myContext.Provider>;
}
