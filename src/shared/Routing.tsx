import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../layout/index.tsx'
import Home from '../pages/home/index.tsx'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing