import React from "react"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom"
import WildcatIndex from "./WildcatIndex"
import mockWildcats from "../mockWildcats"

    describe("<WildcatIndex />", () => {
        it("renders without crashing", () => {})
        it("renders cat cards", () => {
            const div = document.createElement("div")
            render(<WildcatIndex wildcats={mockWildcats} />, div)
            mockWildcats.forEach(wildcat => {
                const wildCatname = screen.getByText(wildcat.name)
                expect(wildCatname).toBeInTheDocument()
            })     
        })
    })

    