import {render, screen} from "@testing-library/react";
import List from './List'

const data=['HTML', 'React', 'JS', 'SCSS']

describe('List conponent', ()=>{
    it("List rendered", ()=>{
        render(<List items={data}/>)
        expect(screen.getByRole("list")).toBeInTheDocument()
        expect(screen.getByText(/react/i)).toBeInTheDocument()
    })

    it("list rendered without data", ()=>{
        render(<List />)
        expect(screen.queryByRole("list")).toBeNull()
    })

    it("list snapshot", ()=>{
        const list=render(<List items={data}/>)
        expect(list).toMatchSnapshot()
    })

    it("list snapshot without data", ()=>{
        const listWithoutData=render(<List/>)
        expect(listWithoutData).toMatchSnapshot()
    })
})