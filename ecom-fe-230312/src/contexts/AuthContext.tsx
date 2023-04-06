import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { User } from '../models/user';

interface AuthContextType {
  user: User | null;
  setUser?: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {}
});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [userState, setUser] = useState<User | null>(null);
  const { login } = useAuth();

  const contextValue = useMemo(
    () => ({
      user: userState
    }),
    [userState]
  );

  useEffect(() => {
    const res = login();
    setUser(res);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export default AuthContextProvider;
