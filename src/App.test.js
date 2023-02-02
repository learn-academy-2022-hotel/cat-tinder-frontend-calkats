import React from "react"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom"
import App from "./App"

describe("<App />", () => {
  it("renders a greeting", () => {
    render( 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    screen.debug() 
    const greeting = screen.getByText("Welcome Tail Wagger!!")
    expect(greeting).toBeInTheDocument()
  })
})
