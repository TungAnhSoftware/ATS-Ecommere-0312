import { Header, Title, Input, Anchor, Grid, Container, Center } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import './Nav_Style.css'

const NavSubRetail = () => {
  return (
    <Header height={{ xs: 140, sm: 55, md: 55 }} p="xs" style={{ backgroundColor: '#f2f2f2', width: '100%' }}>
      <Grid justify="center" align="center">
        <Grid.Col xs={12} sm={3} lg={3} >
          <Center>
            <Title order={3} weight={500} c="black">
              Find a store
            </Title>
          </Center>

        </Grid.Col>
        <Grid.Col xs={12} sm={6} lg={6}>
            <Input
              radius="md"
              icon={<IconSearch />}
              placeholder="Search by location, ZIP, or store name"
            />

        </Grid.Col>
        <Grid.Col xs={12} sm={3} lg={3}>
          <Center>
            <Anchor href="#">Complete store list &gt; </Anchor>
          </Center>
        </Grid.Col>
      </Grid>
    </Header >
  );
};

export default NavSubRetail;