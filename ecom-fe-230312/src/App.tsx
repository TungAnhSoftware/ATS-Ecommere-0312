import AuthContextProvider from './contexts/AuthContext';
import AppRouter from './router';

const App = () => {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
};

export default App;
