import { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({producto})  => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.thumbnail} />
      <Card.Body>
        <Card.Title>{producto.title} </Card.Title>
        <Card.Text>
        $ {producto.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
export default Item