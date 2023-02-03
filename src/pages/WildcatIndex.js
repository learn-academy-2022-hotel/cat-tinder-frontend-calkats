import React from 'react'
import { Card, CardText, CardBody, Button,
  CardTitle, CardSubtitle } from 'reactstrap';

const WildcatIndex = ({ wildcats }) => {

  return(
  <main>
    {wildcats.map((wildcat, index) =>{
      return(
        <Card
  color="dark"
  style={{
    width: '18rem'
  }}
key={index}>
  <img
    alt="Cat Pictures"
    src={wildcat.image}
  />
  <CardBody>
    <CardTitle tag="h5">
      {wildcat.name}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Age {wildcat.age}
    </CardSubtitle>
    <CardText>
      enjoys: {wildcat.enjoys}
      < br />
      Dislikes: {wildcat.dislikes}
    </CardText>
    <Button>
     More About Me
    </Button>
  </CardBody>
</Card>
      )
    })}



  </main>
  )
}

export default WildcatIndex;