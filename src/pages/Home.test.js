import React from "react"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom"
import Home from "./Home"

describe("<Home />", () => {
    it("renders a greeting", () => {
        render( 
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        )
        // screen.debug() 
        // screen.logTestingPlaygroundURL()
        const greeting = screen.getByText("Welcome fluff balls!!")
        expect(greeting).toBeInTheDocument()
      })
    it("it has a title", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        // screen.logTestingPlaygroundURL()
        const home =screen.getByRole('heading', {
            name: /Home/i
          })
          expect(home).toBeInTheDocument()
    })
})