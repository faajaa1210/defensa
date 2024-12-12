import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, CardGroup } from 'reactstrap';

function Tarjeta(props) {
  const { titulo, imagen, texto, fecha, botontexto } = props;

  return (
    <CardGroup>
      <Card>
        <CardImg
          alt="Card image cap"
          src={imagen}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            {titulo}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            {fecha}
          </CardSubtitle>
          <CardText>
            {texto}
          </CardText>
          <Button>
            {botontexto}
          </Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
}

export default Tarjeta;