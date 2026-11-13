
import { useSelector } from 'react-redux'

const GuestHome = () => {
  const { user } = useSelector((state) => state.auth)
  const username = user?.user_metadata?.firstname || user?.email?.split('@')[0][0]
  return (
    <div>
      <div className='mt-14 text-xl'>
        <h1>Welcome, <span className='text-[var(--text-secondary)] font-bold '>{username}</span></h1>
      </div>
    </div>
  )
}

export default GuestHome