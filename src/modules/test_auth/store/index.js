const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  loading: false,
  errors: [],
  success: false,
  formData: null,
}

const authSlice = createSlice({
  name: 'auth',

  initialState,

  reducers: {
    startAuth(state) {
      state.loading = true
      state.errors = []
    },

    successAuth(state) {
      state.success = true
      state.loading = false
      state.errors = []
    },

    failAuth(state, { payload }) {
      state.errors = payload
      state.loading = false
    },

    logout(state) {
      state.success = false
      state.loading = false
      state.errors = []
    },

    setFormData(state, { payload }) {
      state.formData = payload
    },
  },
})

export const {
  startAuth,
  successAuth,
  failAuth,
  logout,
  setFormData,
} = authSlice.actions

export default authSlice.reducer
