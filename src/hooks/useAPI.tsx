import { useState } from "react";

const useAPI = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const getUserData = async (username: string) => {
    setIsFetching(true);
    return await fetch(`https://api.github.com/users/${username}`, { method: 'GET' })
      .then(res => res.json())
      .then(body => {
        setIsFetching(false);
        return body;
      })
      .catch(err => {
        setIsFetching(false);
        setError(err);
      })
  }

  return {
    isFetching,
    error,
    getUserData,
  }
}

export default useAPI;