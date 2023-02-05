import React from 'react'
import { Card, CardText, CardBody, Button,
CardTitle, CardSubtitle } from 'reactstrap';
import { NavLink } from 'react-router-dom';

// const WildcatIndex = ({ wildcats }) => {

//   return(
//   <main>
//     {wildcats?.map((wildcat, index) =>{
//       return(
// <Card
//       color="dark"
//       style={{width: '18rem', height:'26rem'}}
//       key={index}>
//   <img
//     alt="Cat Pictures"
//     src={wildcat.image}
//   />
//   <CardBody>
//     <CardTitle tag="h5">
//       {wildcat.name}
//     </CardTitle>
//       <CardSubtitle
//       className="mb-2 text-muted"
//       tag="h6"
//       >
//       Age {wildcat.age}
//       </CardSubtitle>
//     <CardText>
//     </CardText>
//     <NavLink to={`/wildcatshow/${wildcat.id}`} class-name="nav-link"> 
//      More About Me
//     </NavLink>
//   </CardBody>
// </Card>
//       )
//     })}
//   </main>
//   )
// }

const WildcatIndex = ({ wildcats }) => {
  return (
    <main className="index-cards">
      {wildcats?.map((wildcat, index) => {
        return (
          <Card
            color="dark"
            style={{
              width: "18rem" ,height:'26rem',
            }}
            key={index}
          >
            <img alt="wildcat picrues" src={wildcat.image} />
            <CardBody>
              <CardTitle tag="h5">{wildcat.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {wildcat.age}
              </CardSubtitle>

              <NavLink to={`/wildcatshow/${wildcat.id}`} class-name="nav-link">
                More About Me
              </NavLink>
            </CardBody>
          </Card>
        )
      })}
    </main>
  )
}

export default WildcatIndex;