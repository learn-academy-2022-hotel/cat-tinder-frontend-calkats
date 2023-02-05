import React, { useState } from "react"
import mockWildcats from "./mockWildcats"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import WildcatEdit from "./pages/WildcatEdit"
import WildcatIndex from "./pages/WildcatIndex"
import WildcatNew from "./pages/WildcatNew"
import WildcatShow from "./pages/WildcatShow"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound"
import './App.css';

const App = () => {
  const [wildcats, setWildcats] = useState(mockWildcats)
  
  const createNewWildcat= (newWildcatObject) => {
    console.log("new wildcat obj: ", newWildcatObject)

  }
  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wildcatindex" element={<WildcatIndex wildcats={wildcats} />} />
       <Route path="/wildcatshow/:id" element={<WildcatShow wildcats={wildcats} />} />
        <Route path="/wildcatedit" element={<WildcatEdit />} />
        <Route path="/wildcatnew" element={<WildcatNew  createNewWildcat={createNewWildcat}/>} />
       <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
