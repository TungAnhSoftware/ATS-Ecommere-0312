import { User } from '../models/user';

const useAuth = () => {
  const login = () => {
    // Login logic -> get "res"
    const res: User = {
      email: 'abcd@gmail.com',
      id: 0,
      username: 'abcd'
    };
    return res;
  };

  return { login };
};

export default useAuth;
