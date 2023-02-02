import React, { useState } from "react"
import wildcats from "./mockWildcats"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import WildcatEdit from "./pages/WildcatEdit"
import WildcatIndex from "./pages/WildcatIndex"
import WildcatNew from "./pages/WildcatNew"
import WildcatShow from "./pages/WildcatShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import './App.css';

const App = () => {
  const [mockWildcats, setMockWildcats] = useState(wildcats)
  
  
  return(
    <>
      <Header />
      <h1>Welcome Tail Wagger!!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wildcatedit" element={<WildcatEdit />} />
        <Route path="/wildcatindex" element={<WildcatIndex />} />
        <Route path="/wildcatnew" element={<WildcatNew />} />
       <Route path="/wildcatshow" element={<WildcatShow />} />
       <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
