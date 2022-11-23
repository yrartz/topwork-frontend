import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      id: 0,
      email: "",
      role: 0,
      name: "",
      token: ""
    }
  },
  reducers: {
    initializeUser: (state, action) => {
      state.user.id = action.payload.id 
      state.user.email = action.payload.email
      state.user.role = action.payload.role
      state.user.name = action.payload.name
      state.user.token = action.payload.token
      localStorage.setItem("TOKEN", action.payload.token)
    }
  }
})

export const { initializeUser } = userSlice.actions
export default userSlice.reducer