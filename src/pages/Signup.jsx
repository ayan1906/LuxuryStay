import { ArrowRight, Eye, EyeClosed, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { NavLink , useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { signupUser } from '../redux/features/authSlice'


const Signup = () => {
  
  const [showPassword, setShowPassword] = useState(false)
  const [ismodalopen, setismodalopen] = useState(false)
  const dispatch = useDispatch()
  const { loading, error } = useSelector(state => state.auth)
const navigate = useNavigate()
  const onsubmit = async (data) => {
    try {
      await dispatch(
        signupUser({
          email: data.email,
          password: data.password,
          firstname: data.firstName,
          lastname: data.lastname,
        })
      ).unwrap()

      console.log('Form Submitted Data:', data)
      setismodalopen(true)

      setTimeout(() => {
        setismodalopen(false)
        navigate('/')
        reset()
      }, 2000)
      
    } catch (error) {
      console.error('Signup failed:', error)
    }
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }
  })



  return (
    <div className='min-h-screen flex items-center justify-center pt-24 pb-12 px-4'>
      <div className='bg-white max-w-md w-full rounded-xl p-8 shadow-lg text-gray-800'>
        <h1 className='text-amber-600 font-bold text-xl'>LuxuryStay</h1>
        <h2 className='text-2xl font-bold mt-2'>Create Account</h2>
        <p className='text-gray-500 text-sm mb-6'>Join LuxuryStay today</p>

        <form onSubmit={handleSubmit(onsubmit)} noValidate>
          <div className='flex flex-col gap-4'>
            {/* First Name & Last Name */}
            <div>
              <label htmlFor="fname" className='block text-sm font-medium text-gray-700 mb-1'>
                First Name
              </label>
              <input
                type="text"
                id='fname'
                placeholder='Enter your first name'
                {...register('firstName', { required: 'First name is required' })}
                className={`w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none transition ${errors.firstname ? 'border-red-500 focus:ring-2 focus:ring-red-400' : 'border-gray-300 focus:ring-2 focus:ring-amber-500'
                  }`}
              />
              {errors.firstname && (
                <span className='text-xs text-red-500 mt-1 block'>{errors.firstname.message}</span>
              )}

              <label htmlFor="lname" className='block text-sm font-medium text-gray-700 mb-1 mt-3'>
                Last Name
              </label>
              <input
                type="text"
                id='lname'
                placeholder='Enter your last name'
                {...register('lastname', { required: 'Last name is required' })}
                className={`w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none transition ${errors.lastname ? 'border-red-500 focus:ring-2 focus:ring-red-400' : 'border-gray-300 focus:ring-2 focus:ring-amber-500'
                  }`}
              />
              {errors.lastname && (
                <span className='text-xs text-red-500 mt-1 block'>{errors.lastname.message}</span>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>
                Email Address
              </label>
              <input
                type="email"
                id='email'
                placeholder='name@example.com'
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please enter a valid email address'
                  }
                })}
                className={`w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none transition ${errors.email ? 'border-red-500 focus:ring-2 focus:ring-red-400' : 'border-gray-300 focus:ring-2 focus:ring-amber-500'
                  }`}
              />
              {errors.email && (
                <span className='text-xs text-red-500 mt-1 block'>{errors.email.message}</span>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className='block text-sm font-medium text-gray-700 mb-1'>
                Password
              </label>
              <div className='relative flex items-center'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  placeholder='••••••'
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters'
                    }
                  })}
                  className={`w-full px-4 py-2 pr-10 border rounded-lg text-gray-900 focus:outline-none transition ${errors.password ? 'border-red-500 focus:ring-2 focus:ring-red-400' : 'border-gray-300 focus:ring-2 focus:ring-amber-500'
                    }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 text-gray-500 hover:text-gray-700 cursor-pointer'
                >
                  {showPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
                </button>
              </div>
              {errors.password && (
                <span className='text-xs text-red-500 mt-1 block'>{errors.password.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              
              className='w-full bg-[var(--text-secondary,#c56206)] hover:bg-amber-600 text-black font-medium py-2.5 rounded-lg transition duration-200 mt-2 gap-1 flex items-center justify-center group cursor-pointer disabled:opacity-70'
            >
              {loading ? 'Creating Account...' : 'Create Account'}
              <ArrowRight className='group-hover:translate-x-1.5 transition duration-200' size={18} />
            </button>
          </div>

          <div className='flex justify-center mt-3 text-base text-gray-600'>
            <h1>
              Already have an account?{' '}
              <NavLink to={'/login'} className='text-amber-600 font-semibold hover:underline'>
                Login
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">Account Created!</h3>
            <p className="text-gray-500 text-sm mb-4">
              Welcome to LuxuryStay. Your account has been created successfully.
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

export default Signup