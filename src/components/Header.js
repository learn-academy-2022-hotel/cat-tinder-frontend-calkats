import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {


  return(
  <> 
      <div className="m-4">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a href="/" className="navbar-brand">
              <div className="page-name"><h1>Claw Tinder</h1></div>
            </a>
            <NavLink to="/wildcatindex">See the Wildcats</NavLink>
            <NavLink to="/wildcatnew">Add a Wildcat</NavLink>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header;