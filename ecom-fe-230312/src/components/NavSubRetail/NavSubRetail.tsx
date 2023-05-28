import { Header, Title, Input, Anchor, Grid, Center } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const NavSubRetail = () => {
  return (
    <Header height={{md: 55, base: 55 }} p="xs" style={{ backgroundColor: '#f2f2f2' }}>
        <Grid justify="center" align="center">
          <Grid.Col sm={12} lg={2} offset={2}>
            <Title order={3} weight={500} c="black">
              Find a store
            </Title>
          </Grid.Col>
          <Grid.Col sm={12} lg={3}>
            <Input
              radius="md"
              icon={<IconSearch />}
              placeholder="Search by location, ZIP, or store name"
            />
          </Grid.Col>
          <Grid.Col sm={12} lg={3} offset={1}>
            <Anchor href="#">Complete store list &gt; </Anchor>
          </Grid.Col>
        </Grid>
    </Header>
  );
};

export default NavSubRetail;