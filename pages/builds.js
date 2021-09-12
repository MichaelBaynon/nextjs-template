import { Container, Row, Card, Button, Badge } from "react-bootstrap";

const Builds = () => {
  return (
    <div>
      <h1 className="buildsPageTitle">BUILDS</h1>
      <div className="buildVideos">
        <Card style={{ width: "18rem", marginBottom: '40px' }}>
          <Card.Body>
            <Card.Title>Albion Online |CORRUPTED DUNGEONS | Heavy Crossbow PvP</Card.Title>
            <iframe
            width='100%'
              className="buildVideo"
              src="https://www.youtube.com/embed/AuWJEfzny4g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <Button variant="primary"> <a href='https://www.youtube.com/watch?v=AuWJEfzny4g'> Link to video</a></Button>
          </Card.Body>
        </Card>

        {/* //// */}

        <Card style={{ width: "18rem", marginBottom: '40px'  }}>
          <Card.Body>
            <Card.Title>Albion Online |CORRUPTED DUNGEONS | Heavy Crossbow PvP</Card.Title>
            <iframe
            width='100%'
              className="buildVideo"
              src="https://www.youtube.com/embed/AuWJEfzny4g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <Button variant="primary"> <a href='https://www.youtube.com/watch?v=AuWJEfzny4g'> Link to video</a></Button>
          </Card.Body>
        </Card>

        {/* //// */}

        <Card style={{ width: "18rem", marginBottom: '40px'  }}>
          <Card.Body>
            <Card.Title>Albion Online |CORRUPTED DUNGEONS | Heavy Crossbow PvP</Card.Title>
            <iframe
            width='100%'
              className="buildVideo"
              src="https://www.youtube.com/embed/AuWJEfzny4g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <Button variant="primary"> <a href='https://www.youtube.com/watch?v=AuWJEfzny4g'> Link to video</a></Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Builds;
