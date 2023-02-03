import React from "react"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom"
import Header from "./Header"

describe("<Header />", () => {
    it("has a header", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        const header = screen.getByRole('heading', {
            name: /claw tinder/i
        })
        expect(header).toBeInTheDocument()
    })
})

