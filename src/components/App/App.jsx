import './App.css';
import List from "../List";
import {useEffect, useState} from "react";
import Search from "../Search";

const data = [
    'HTML', 'JS', 'React', 'TypeScript', 'SCSS', 'Angular', 'Vue', 'NodeJs'
]

function App() {
    const [search, setSearch] = useState("")
    const [items, setItems] = useState(data)
    useEffect(() => {
        setItems(data.filter(el => el.toLowerCase().includes(search.toLowerCase())))
    }, [search])
    return (
        <div className="App">
            <div className="App-header">
                <p>learn testing</p>
                <Search value={search} onChange={(e) => setSearch(e.target.value)}>Find course:</Search>
                <List items={items}/>
            </div>
        </div>
    );
}

export default App;
