import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";
import withRouter from "next/dist/client/with-router";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Albion HQ</title>
        <link rel="icon" href="/AlbionHQlogo.png" />
      </Head>

      <Card style={{border: 'none'}} className="bg-dark text-white">
        <Card.Img src="/BUILDS.jpg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title  className='homeCardText'>Card title</Card.Title>
          <Card.Text className='homeCardText'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text  className='homeCardText'>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>

      <div className="homeCards">
        <Card style={{ width: "18rem" }} className="singeHomeCard">
          <Card.Img variant="top" src="/BUILDS.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">
              {" "}
              <Link href="/builds"> Go somewhere </Link>{" "}
            </Button>
          </Card.Body>
        </Card>

        {/* card 2 */}

        <Card style={{ width: "18rem" }} className="singeHomeCard">
          <Card.Img variant="top" src="/BUILDS.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">
              {" "}
              <Link href="/builds"> Go somewhere </Link>{" "}
            </Button>
          </Card.Body>
        </Card>

        {/* card 3 */}

        <Card style={{ width: "18rem" }} className="singeHomeCard">
          <Card.Img variant="top" src="/BUILDS.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">
              {" "}
              <Link href="/builds"> Go somewhere </Link>{" "}
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
