import { client } from '../utils/httpClient'

import {
  startGetSiteSettings,
  successGetSiteSettings,
  failGetSiteSettings,
} from './reducer'

export const apiGetSiteSettings = () => async (dispatch) => {
  dispatch(startGetSiteSettings())

  try {
    const response = await client.get('/api/site-settings/')

    dispatch(successGetSiteSettings(response.data))
  } catch (error) {
    dispatch(failGetSiteSettings())
  }
}
