import React, { createContext, FC, ReactNode, useState } from 'react';

type SecurityContextType = {
  olderThan18: boolean,
  setOlderThan18(validation: boolean): void,
  fullName: string,
  setFullName(fullName: string): void
}

const SecurityContext = createContext<SecurityContextType>({} as SecurityContextType)

export const SecurityProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [olderThan18, setOlderThan18] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>('')

  return <SecurityContext.Provider value={{
    olderThan18, setOlderThan18,
    fullName, setFullName
  }}>
    {children}
  </SecurityContext.Provider>
}

export default SecurityContext;