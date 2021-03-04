import { createContext, ReactNode, useState } from "react";

export const LoginContext = createContext({} as LoginContextData);

export function LoginProvider({ children }: LoginProviderProps) {
  
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [userImage, setUserImage] = useState('');

  const loginHandler = (username: string) => {
    fetch(`https://api.github.com/users/${username}`, { method: 'GET' })
      .then(res => res.json())
      .then(body => {
        if (body.id) setId(body.id);
        if (body.name) setName(body.name);
        if (body.avatar_url) setUserImage(body.avatar_url);
      })
      .catch(err => console.log(err))
  }

  return (
    <LoginContext.Provider
      value={{
        id,
        name,
        userImage,
        loginHandler
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

interface LoginContextData {
  loginHandler: (username: string) => void;
  id: number;
  name: string;
  userImage: string;
}

interface LoginProviderProps {
  children: ReactNode;
}