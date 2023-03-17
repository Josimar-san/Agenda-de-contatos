import "./App.css"
import { NavBarMenu } from "./components/NavBarMenu"
import { Home } from "./pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Gallery } from "./components/Gallery"
import { ContactList } from "./components/ContactList"


function App() {
    return (
        <div id="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/ContacList" element={<Home/>} />
                    <Route path="/gallery" element={<Gallery/>}/>
                </Routes>
                <NavBarMenu />
            </BrowserRouter>
        </div>
    )
}

export default App
