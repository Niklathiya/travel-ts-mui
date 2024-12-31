import { Outlet } from 'react-router-dom'
import Header from '../component/header/index.tsx'
import Footer from '../component/footer/index.tsx'

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
