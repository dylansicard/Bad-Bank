import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
const MyCard = (props) => {
  const classes = () => {
    const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
    return `${bg} ${txt}`;
  };
  return (
    <div className="py-3">
      <Container>
        <Card className={`h-75 mx-auto text-center ${classes()}`}>
          <Card.Header>{props.header}</Card.Header>
          <Card.Body className={`bg-${props.bodybg}`}>
            {props.title && <Card.Title>{props.title}</Card.Title>}
            {props.text && <Card.Text>{props.text}</Card.Text>}
            {/* <Button variant="primary">Go somewhere</Button> */}
            {props.body}
          </Card.Body>
          {props.status && (
            <Card.Footer className="text-muted">{props.status}</Card.Footer>
          )}
        </Card>
      </Container>
    </div>
  );
};

export default MyCard;
