import {
    Outlet
} from 'react-router-dom';
import Navigation from "../Navigation"
// import Footer from "../Footer"

// App Container can be seen as a wrapper component for the entire app
export default function AppContainer() {
    return (
        <>
            <Navigation />
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}