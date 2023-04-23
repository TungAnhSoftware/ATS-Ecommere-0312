import { Container, Image } from "@mantine/core"
import Banner from "../../components/Banner"
import DynamicButton from "../../components/DynamicButton"
import Header from "../../components/Header"
import bannerImage from '../../components/image/apple-banner.png'
import bigImage from '../../components/image/big-bigger.jpg'

const ProductDetail = () => {
  const handleBuyItem = () => {
    console.log("Buy now");
  }

  return (
    <>
      <Header title="Wonderfull." />
      <center>
        <Banner imgUrl={bannerImage} />
        <p>
          <h2>iPhone 14 and iPhone 14 Plus</h2>
          From $799 or $33.29/mo. for 24 mo. before trade‑in*
        </p>
        <DynamicButton title="Buy" onClick={handleBuyItem} />
      </center>
      <Container>
        <Header title="Big and bigger." />
        <Image src={bigImage} fit="fill" maw={680} />
      </Container>
    </>
  )
}

export default ProductDetail