import {render, screen, act} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

describe("App", () => {
    it('renders learn react link', () => {
        act(() => {
            render(<App/>);
        });
        const linkElement = screen.getByText(/learn testing/i);
        expect(linkElement).toBeInTheDocument();
        expect(screen.getByText(/Find course:/i)).toBeInTheDocument()
    });

    it("typing in Search box works", () => {
        act(() => {
            render(<App/>);
        });
        expect(screen.queryByDisplayValue(/React/i)).toBeNull()
        act(() => {
            userEvent.type(screen.getByRole("textbox"), "React")
        })
        expect(screen.queryByDisplayValue("React")).toBeInTheDocument()

    })

    it("filter is working", () => {
        act(() => {
            render(<App/>);
        });

        expect(screen.getByText(/Vue/)).toBeInTheDocument();
        expect(screen.getByText(/TypeScript/)).toBeInTheDocument();

        act(() => {
            userEvent.type(screen.getByRole("textbox"), "script");
        });

        expect(screen.queryByText(/vue/)).toBeNull();
        expect(screen.getByText(/TypeScript/)).toBeInTheDocument();
    })
})
