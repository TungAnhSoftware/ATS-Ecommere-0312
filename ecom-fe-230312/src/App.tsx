import { useQuery } from '@tanstack/react-query';
import apiClient from './api';
import AuthContextProvider from './contexts/AuthContext';
import AppRouter from './router';

const App = () => {
  // Fetch example
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => apiClient.get('posts').then((res) => res.data)
  });

  if (isLoading) return <h1>Loading...</h1>;

  if (error instanceof Error)
    return <h1>An error has occurred: {error.message}</h1>;

  console.log(data, isLoading, error);

  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
};

export default App;
