import { client } from 'modules/core/utils/httpClient'

import { startGetUser, successGetUser, failGetUser } from 'modules/user/store'

export const apiGetUserData = () => async (dispatch) => {
  dispatch(startGetUser())

  try {
    const response = await client.get('/rest-auth/user/')

    dispatch(successGetUser(response.data))
  } catch (error) {
    dispatch(failGetUser(error.message))
  }
}
