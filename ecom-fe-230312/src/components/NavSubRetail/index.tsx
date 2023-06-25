import { Header, Flex, Title, Input, Anchor } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const NavSubRetail = () => {
  return (
    <Header height={55} p="xs" style={{ backgroundColor: '#f2f2f2' }}>
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        gap={{ base: '30%', sm: '9%' }}
        align={{ sm: 'center' }}
        justify={{ sm: 'center' }}
      >
        <Title order={3} weight={500}>
          Find a store
        </Title>
        <Input
          style={{ width: '25%' }}
          radius="md"
          icon={<IconSearch />}
          placeholder="Search by location, ZIP, or store name"
        />
        <Anchor href="#">Complete store list &gt; </Anchor>
      </Flex>
    </Header>
  );
};

export default NavSubRetail;
