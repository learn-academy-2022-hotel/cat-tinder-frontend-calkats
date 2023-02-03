import React from 'react'
import { useParams } from 'react-router-dom';




const WildcatShow = ({ wildcats }) => {

  const { id } = useParams()
  let selectedCat = wildcats.find(wildcat => wildcat.id === +id)

  return(
    <main className="wildcat-show-cards">
    {selectedCat && (
      <>
        <img
          alt={` ${selectedCat.name}'s profile`}
          src={selectedCat.image}
          className="wildcat-show-img"
        />
        <h3>{selectedCat.enjoys}</h3>
      </>
    )}
  </main>
  )
}

export default WildcatShow;