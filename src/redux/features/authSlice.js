import { createSlice , createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { supabase } from "../../../supabasecCient";

export const signupUser = createAsyncThunk(
    'auth/signUpUser' , 
    async ({email , password , firstname , lastname } , {rejectWithValue}) =>{
        try {
            const {data , error} = await supabase.auth.signUp({
                email , password , options:{
                    data : {
                        firstname : firstname , 
                        lastname :lastname,
                    }
                }
            })
            if (error) throw error
            return data.user
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)



export const signinUser = createAsyncThunk(
    'auth/signinUser' , 
    async ({email , password } , {rejectWithValue}) =>{
        try {
            const {data , error} = await supabase.auth.signInWithPassword({
                email , password 
            })
            if (error) throw error
            return data.user
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)



export const signOut = createAsyncThunk(
    'auth/signOutUser' , 
    async (_ , {rejectWithValue}) =>{
        try {
            const { error} = await supabase.auth.signOut()
            if (error) throw error
            return null
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)

const storedUser = typeof window !== 'undefined' ? localStorage.getItem('user') : null
let initialUser = null
try {
  initialUser = storedUser ? JSON.parse(storedUser) : null
} catch (e) {
  initialUser = null
}

const authslice = createSlice({
    name: 'auth', 
    initialState: {
        user: initialUser, 
        loading: false, 
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
          state.user = action.payload
          if (action.payload) {
            localStorage.setItem('user', JSON.stringify(action.payload))
          } else {
            localStorage.removeItem('user')
          }
        },
        clearError: (state) => {
          state.error = null
        }
    },
    extraReducers: (builder) => {
      builder
    // sign up
      .addCase(signupUser.pending, (state) => {
        state.loading = true 
        state.error = null
      }).addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false 
        state.user = action.payload
        if (action.payload) {
          localStorage.setItem('user', JSON.stringify(action.payload))
        }
      }).addCase(signupUser.rejected, (state, action) => {
        state.loading = false 
        state.error = action.payload
      })

    // signin 
      .addCase(signinUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        if (action.payload) {
          localStorage.setItem('user', JSON.stringify(action.payload))
        }
      })
      .addCase(signinUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
    // sign out
      .addCase(signOut.fulfilled, (state) => {
        state.user = null
        state.loading = false
        localStorage.removeItem('user')
      })
    }
})

export const { setUser , clearError} = authslice.actions
export default authslice.reducer