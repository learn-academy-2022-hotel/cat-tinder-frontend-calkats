import React from "react"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom"
import NotFound from "./NotFound"

describe("<NotFound />", () => {
    it("has a image", () =>{
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        )
        // screen.logTestingPlaygroundURL()
        const image = screen.getByRole("img")
        expect(image).toHaveAttribute("src","https://media.istockphoto.com/id/1423224246/photo/the-lion-is-one-of-the-four-big-cats-in-the-genus-panthera-and-a-member-of-the-family-felidae.jpg?b=1&s=170667a&w=0&k=20&c=J_UfNJEpak4x4nUQqnR0_tzuS28GZuCGZwA9u_qPC3I=" )
    })
    it("it has an error heading", () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        )
        screen.logTestingPlaygroundURL()
        const notFound =screen.getByRole('heading', {
            name: /404 not found/i
          })
          expect(notFound).toBeInTheDocument()
    })
})
