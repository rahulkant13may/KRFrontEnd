const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  data: null,
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'user',

  initialState,

  reducers: {
    startGetUser(state) {
      state.loading = true
      state.error = null
    },

    successGetUser(state, { payload }) {
      state.data = payload
      state.loading = false
      state.error = null
    },

    failGetUser(state, { payload }) {
      state.loading = false
      state.error = payload
    },

    clearUser(state) {
      state.data = null
      state.loading = false
      state.error = null
    },
  },
})

export const {
  startGetUser,
  successGetUser,
  failGetUser,
  clearUser,
} = authSlice.actions

export default authSlice.reducer
