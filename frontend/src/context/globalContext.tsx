/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from 'react';

interface GlobalContextProps {
  credential: string;
  saveUserInfo: (credentialInfo: string) => void;
  getUserInfo: () => string;
}

export const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps,
);

export function globalContext() {
  const context = useContext<GlobalContextProps>(GlobalContext);

  if (!context) {
    throw new Error('globalContext must be used within an GlobalProvider.');
  }
  return context;
}

const GlobalProvider = ({ children }: {children: any} ) => {
  const [credential, setCredential] = useState<string>('');

  const saveUserInfo = (credentialInfo: string) => {
    setCredential(credentialInfo);
    console.log('Saved credential: ', credentialInfo);
    localStorage.setItem('credential', credentialInfo);
  };

  const getUserInfo = () => {
    return localStorage.getItem('credential') || '';
  };

  return (
    <GlobalContext.Provider value={{
        credential,
        saveUserInfo,
        getUserInfo
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
