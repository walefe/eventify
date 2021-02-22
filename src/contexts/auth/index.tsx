import { useMemo, createContext, useState, useCallback } from 'react';

import { PropsWithRequiredChildren } from '@common/types';
import { composeStorageKey } from '@utils';
import { api } from '@services';

type User = {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
};

type AuthState = {
  token: string;
  user: User;
};

type SignInCredentials = {
  email: string;
  password: string;
};

export type AuthContextData = {
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  updateUser: (user: User) => void;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider = ({ children }: PropsWithRequiredChildren) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem(composeStorageKey('token'));
    const user = localStorage.getItem(composeStorageKey('user'));

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback<AuthContextData['signIn']>(
    async ({ email, password }) => {
      const response = await api.post('sessions', {
        email,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem(composeStorageKey('token'), token);
      localStorage.setItem(composeStorageKey('user'), JSON.stringify(user));

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token, user });
    },
    [],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem(composeStorageKey('token'));
    localStorage.removeItem(composeStorageKey('user'));

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback<AuthContextData['updateUser']>(
    (user) => {
      localStorage.setItem(composeStorageKey('user'), JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [data.token],
  );

  const value = useMemo<AuthContextData>(
    () => ({
      user: data.user || {},
      signIn,
      signOut,
      updateUser,
    }),
    [data.user, signIn, signOut, updateUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
