import React from "react";
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from "react-router-dom";
import WildcatShow from "./WildcatShow";
import mockWildcats from "../mockWildcats";


const renderShow = () => {
  render(
  <MemoryRouter initialEntries={["/wildcatshow/1"]}>
    <Routes>
    <Route path="wildcatshow/:id" element={<WildcatShow wildcats={mockWildcats}/>} />
    </Routes>
  </MemoryRouter>
  )
}

describe("<WildcatShow />", () => {
  it("renders wildcat cards with enjoys", () => {
    renderShow()
    expect(screen.getByText(`${mockWildcats[0].enjoys}`)).toBeInTheDocument()
    })
  it("renders wildcat cards with dislikes", () => {
      renderShow()
      expect(screen.getByText(`${mockWildcats[0].dislikes}`)).toBeInTheDocument()
    })  
  })