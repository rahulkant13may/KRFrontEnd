const { createSlice } = require('@reduxjs/toolkit')

const siteSlice = createSlice({
  name: 'site_settings',

  initialState: {
    data: null,
    loading: true,
  },

  reducers: {
    startGetSiteSettings(state) {
      state.loading = true
    },

    successGetSiteSettings(state, { payload }) {
      state.data = payload
      state.loading = false
    },

    failGetSiteSettings(state) {
      state.data = null
      state.loading = false
    },
  },
})

export const {
  startGetSiteSettings,
  successGetSiteSettings,
  failGetSiteSettings,
} = siteSlice.actions

export default siteSlice.reducer
