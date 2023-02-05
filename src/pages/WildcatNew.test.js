import React from "react"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom"
import WildcatNew from "./WildcatNew"

describe("<WildcatNew />", () => {
    render(
      <BrowserRouter>
        <WildcatNew />
      </BrowserRouter>
      )
      it("can see the title of the page", () => {
        const element = screen.getByText(/new wildcat/i)
        expect(element).toBeInTheDocument()
      })
    })