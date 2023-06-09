import { Group, Image, Space, Stack, Text, Title } from "@mantine/core";
import Banner from "./Components/Banner";
import CenterCard from "./Components/CenterCard";
import ColorSelector from "./Components/ColorSelector";
import DynamicButton from "./Components/DynamicButton";
import Header from "./Components/Header";
import VerticalCard from "./Components/VerticalCard";
import { designedToMakeADifference, phoneColors, waysToSaveOnIphone } from "./MockData";
import PhoneFeatures from "./Components/PhoneFeatures";

const ProductDetail = () => {
  const handleBuyItem = () => {
    console.log("Buy now");
  };

  return (
    <>
      <Group position="apart">
        <Header title="Wonderfull." />
        <ColorSelector colors={phoneColors} />
      </Group>

      <center>
        <Banner imgUrl={null} />
        <Space h='sm' />
        <Title order={2}>iPhone 14 and iPhone 14 Plus</Title>
        <Text fz='lg'>From $799 or $33.29/mo. for 24 mo. before trade‑in*</Text>
        <DynamicButton title="Buy" onClick={handleBuyItem} />
      </center>
      <Space h='xl' />

      <PhoneFeatures />
      <Space h={100} />

      <Title>Ways to save on iPhone.</Title>
      <Space h='xl' />

      <Group>
        {waysToSaveOnIphone.map((item) =>
          <VerticalCard
            title={item['title']}
            subtitle={item['subtitle']}
            link={item['link']}
            linkDesc={item['linkDesc']}
            imgUrl={item['imgUrl']}
          />
        )}
      </Group>
      <Space h={100} />

      <Title>Designed to make a difference.</Title>
      <Space h='xl' />

      <Group>
        {designedToMakeADifference.map((item) =>
          <VerticalCard
            title={item['title']}
            subtitle={item['subtitle']}
            link={item['link']}
            linkDesc={item['linkDesc']}
            imgUrl={item['imgUrl']}
          />
        )}
      </Group>
      <Space h={100} />

      <Title>Which iPhone is right for you?</Title>
      <Space h='xl' />
    </>
  );
};

export default ProductDetail;