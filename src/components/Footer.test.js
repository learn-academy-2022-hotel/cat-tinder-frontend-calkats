import React from "react"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom"
import Footer from "./Footer"

describe("<Footer />", () => {
    it("has a footer", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
        const footer = screen.getByText(/© created by natally, christian and bora \|\| hotel 2023/i)
        expect(footer).toBeInTheDocument()
    })

})
