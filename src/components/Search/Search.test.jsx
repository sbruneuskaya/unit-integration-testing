import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

const onChange = jest.fn()

describe("Search component", () => {
    it("Search component rendered", () => {
        render(<Search onChange={onChange} value={""}>
            Find:
        </Search>)
        expect(screen.getByText(/Find/i)).toBeInTheDocument()
    })

    it("component rendered without children", () => {
        render(<Search onChange={onChange} value={""}/>)
        expect(screen.getByText(/search/i)).toBeInTheDocument()
    })

    it("component rendered without placeholder", () => {
        render(<Search onChange={onChange} value={""}/>)
        expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument()
    })

    it("custom placeholder worked correctly", () => {
        render(<Search onChange={onChange} value={""} placeholder={"newPlaceholder"}/>)
        expect(screen.getByPlaceholderText("newPlaceholder")).toBeInTheDocument()
    })

    it("onChange works", ()=>{
        render(<Search onChange={onChange} value={""}>
            Find:
        </Search>)
        userEvent.type(screen.getByRole("textbox"), "GETTEXT")
        expect(onChange).toHaveBeenCalledTimes(7)
    })

    it('component have default class', ()=>{
        render(<Search value={""} onChange={onChange}/>)
        expect(screen.getByRole("textbox")).toHaveClass("input")
    })

    it('component have class input if user typing', ()=>{
        render(<Search value={"fffff"} onChange={onChange}/>)
        expect(screen.getByRole("textbox")).toHaveClass("input")
        expect(screen.getByRole("textbox")).toHaveClass("filled")
    })

    it("Search snapshot", ()=>{
        const search=render(<Search onChange={onChange} value={""}>
            Find:
        </Search>)
        expect(search).toMatchSnapshot()
    })

    it("Search snapshot without children", ()=>{
        const search=render(<Search onChange={onChange} value={""}/>)
        expect(search).toMatchSnapshot()
    })
})