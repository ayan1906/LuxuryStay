import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../layouts/Mainlayouts";
import Home from "../pages/Home";
import About from "../pages/About";
import Rooms from "../pages/Rooms";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Guestarea from "../layouts/Guestarea";
import Signup from "../pages/Signup";
import Privateroute from "../components/Privateroute";
import Roomdetail from "../pages/Roomdetail";
import GuestHome from "../components/guestarea/GuestHome";
import GuestReservation from "../components/guestarea/GuestReservation";
import GuestProfile from "../components/guestarea/GuestProfile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayouts />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/rooms', element: <Rooms /> },
            { path: '/services', element: <Services /> },
            { path: '/signup', element: <Signup /> },
            { path: '/login', element: <Login /> },
            { path: '/roomdetail/:id', element: <Roomdetail /> },

            {
                path: '/guestarea', element: (
                    <Privateroute>
                        <Guestarea />
                    </Privateroute>
                ),
                children: [
                    
                    {  index: true, path: 'guesthome', element: <GuestHome /> },
                    { path: 'guestreserv', element: <GuestReservation /> },
                    { path: 'guestprofile', element: <GuestProfile /> },
                ]

            },
        ]
    }]
)