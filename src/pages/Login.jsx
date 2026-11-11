import { ArrowRight, Eye, EyeClosed, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signinUser } from '../redux/features/authSlice'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [ismodalopen, setismodalopen] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, error } = useSelector((state) => state.auth)

  const handleLogin = async (e) => {
    if (e) e.preventDefault()
    try {
      await dispatch(signinUser({ email, password })).unwrap()
      setismodalopen(true)
      setTimeout(() => {
        setismodalopen(false)
        navigate('/')
      }, 2000)
    } catch (err) {
      console.error('Login failed:', err)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center pt-24 pb-12 px-4'>
      <div className='bg-white max-w-md w-full rounded-xl p-8 shadow-lg text-gray-800'>
        <h1 className='text-amber-600 font-bold text-xl'>LuxuryStay</h1>
        <h2 className='text-2xl font-bold mt-2'>Welcome Back</h2>
        <p className='text-gray-500 text-sm mb-6'>Enter your credentials to access your account</p>

        <form onSubmit={handleLogin}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-2.5 rounded-lg mb-4">
              {error}
            </div>
          )}
          <div className='flex flex-col gap-4'>
            <div>
              <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>Email Address</label>
              <input
                type="email"
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='name@example.com'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition'
                required
              />
            </div>

            <div>
              <div className='flex items-center justify-between mb-1'>
                <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
              </div>
              <div className='relative flex items-center'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='••••••••'
                  className='w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 transition'
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 text-gray-500 hover:text-gray-700 cursor-pointer'
                >
                  {showPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className='w-full bg-[var(--text-secondary,#c56206)] hover:bg-amber-600 disabled:opacity-50 text-black font-medium py-2.5 rounded-lg transition duration-200 mt-2 gap-1 flex items-center justify-center group cursor-pointer'
            >
              {loading ? 'Logging in...' : 'Login'}
              <ArrowRight className='group-hover:translate-x-1.5 transition duration-200' size={18} />
            </button>
          </div>

          <div className='flex justify-center mt-4 text-base text-gray-600'>
            <h1>
              Don't have an account?{' '}
              <NavLink to={'/signup'} className='text-amber-600 font-semibold hover:underline'>
                Sign Up
              </NavLink>
            </h1>
          </div>
        </form>
      </div>

      {/* 2-second Auto-closing Modal */}
      {ismodalopen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 px-4 transition-opacity duration-300">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Login Successful!</h3>
            <p className="text-gray-500 text-sm mb-4">
              Welcome back to LuxuryStay. Access granted to your account.
            </p>
            <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
              <div className="bg-green-500 h-full w-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Login
