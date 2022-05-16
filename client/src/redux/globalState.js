import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user:{},
    isAuthenticated:false,
}

export const globalState = createSlice({
  name: 'data',
  initialState,
  reducers: {
    //set auth to true when user authenticate and pass login page with valid cerdentials
    setAuthenticateTrue: (state) => {
        state.isAuthenticated = true;
    },
    //set user to global state 
    setUser: (state,action) => {
        state.user = action.payload.user
    },
    
  },
})

export const { setAuthenticateTrue, setUser } = globalState.actions

export default globalState.reducer