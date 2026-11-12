
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
const Privateroute = ({ children }) => {
    const { user , loading } = useSelector((state) => state.auth)
    const location = useLocation()
    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>
    }

    if (user) {
        return children
    }

    return (

        <>
            <div>
                <Navigate to={'/signup'} state={{from:location}} replace/>
                </div>
        </>
    )
}

export default Privateroute