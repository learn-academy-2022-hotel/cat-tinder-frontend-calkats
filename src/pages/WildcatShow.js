import React from 'react'
import { useParams } from 'react-router-dom';

const WildcatShow = ({ wildcats }) => {

  const { id } = useParams()
  let selectedWildcat = wildcats?.find(wildcat => wildcat.id === +id)

  return(
      <main className="wildcat-show-cards">
        {selectedWildcat && (
          <>
            <img 
              alt={` ${selectedWildcat.name}'s profile`}
              src={selectedWildcat.image}
              className="wildcat-show-img"
            />
            <h3>Enjoys:</h3>
            <h3>{selectedWildcat.enjoys}</h3>
            <h3>Dislikes:</h3>
            <h3>{selectedWildcat.dislikes}</h3>
          </>
        )}
      </main>
    )
}

// const WildcatShow = ({ wildcats }) => {

//   const { id } = useParams()
//   let selectedWildcat = wildcats.find(wildcat => wildcat.id === +id)

//   return(
//     <main className="wildcat-show-cards">
//       {selectedWildcat && (
//         <>
//           <img
//             alt={` ${selectedWildcat.name}'s profile`}
//             src={selectedWildcat.image}
//             className="wildcat-show-img"
//           />
//           <h3>{selectedWildcat.enjoys}</h3>
//         </>
//       )}
//     </main>
//   )
// }

export default WildcatShow;