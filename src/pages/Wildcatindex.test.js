import React from "react"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom"
import WildcatIndex from "./WildcatIndex"
import mockWildcats from "../mockWildcats"

describe("<WildcatIndex />", () => {
    it("renders without crashing", () => {
     const div = document.createElement("div")
          render(
          <BrowserRouter>
          <WildcatIndex />
          </BrowserRouter>
          , div)
        })
      
    it("renders wildcat cards", () => {
      const div = document.createElement("div")
      render(
      <BrowserRouter>
      <WildcatIndex wildcats={mockWildcats} />
      </BrowserRouter>, div)
      mockWildcats.forEach(wildcat => {
        const wildcatName = screen.getByText(wildcat.name)
        expect(wildcatName).toBeInTheDocument()
      })
    
    })
  })


    