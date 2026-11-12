import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../layouts/Mainlayouts";
import Home from "../pages/Home";
import About from "../pages/About";
import Rooms from "../pages/Rooms";
import Services from "../pages/Services";
import Reviews from "../pages/Reviews";
import Login from "../pages/Login";
import Guestarea from "../pages/Guestarea";
import Signup from "../pages/Signup";
import Privateroute from "../components/Privateroute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayouts />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/rooms', element: <Rooms /> },
            { path: '/services', element: <Services /> },
            { path: '/reviews', element: <Reviews /> },
            { path: '/signup', element: <Signup /> },
            { path: '/login', element: <Login /> },

            {
                path: '/guestarea', element:
                    <Privateroute>
                        <Guestarea />
                    </Privateroute>
            },
        ]
    }]
)