import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { apiGetSiteSettings } from '../store/operations'

export const useSiteSettings = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(apiGetSiteSettings())
  }, [dispatch])
}
