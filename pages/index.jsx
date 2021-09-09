import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import Link from 'next/link'
import withRouter from "next/dist/client/with-router";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Albion HQ</title>
        <link rel='icon' href="/AlbionHQlogo.png" />
      </Head>
      
      <Carousel>
        
        
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/BUILDS.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <Link href='/builds'>Builds</Link>
      <p>Resources for what build to run for all the content in Albion Online.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/gathering.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Gathering</h3>
      <p>Info on how best to gather.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/crafting.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Crafting</h3>
      <p>Learn how to craft to make millions!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </div>
  );
}
