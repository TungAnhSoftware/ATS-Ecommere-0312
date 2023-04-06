import { AppShell, Navbar as MantineNavbar } from '@mantine/core';
import { useOutlet } from 'react-router-dom';

const AppLayout = () => {
  const outlet = useOutlet();
  return (
    <AppShell padding="md" navbar={<Navbar />}>
      {outlet}
    </AppShell>
  );
};

export default AppLayout;

const Navbar = () => {
  return (
    <MantineNavbar width={{ base: 300 }} height={500} p="xs">
      {/* Navbar content */}
    </MantineNavbar>
  );
};
