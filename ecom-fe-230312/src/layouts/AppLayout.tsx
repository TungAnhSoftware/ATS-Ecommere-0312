import { AppShell } from '@mantine/core';
import { useOutlet } from 'react-router-dom';

const AppLayout = () => {
  const outlet = useOutlet();
  return <AppShell padding="md">{outlet}</AppShell>;
};

export default AppLayout;
