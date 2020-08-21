import React from 'react'

import BusinessHoursPageBody from "modules/settings/components/BusinessHoursPageBody"
import BusinessHoursPageBreadCrumb from 'modules/settings/components/BusinessHoursPageBreadCrumb'

import { StyledBusinessHoursPage } from './styles'

const BusinessHoursPage = () => {
  return (
    <>
      <StyledBusinessHoursPage>
        <BusinessHoursPageBreadCrumb/>
        <BusinessHoursPageBody/>
      </StyledBusinessHoursPage>
    </>
  )
}

export default BusinessHoursPage
