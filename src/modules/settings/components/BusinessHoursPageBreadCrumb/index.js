import React from 'react'

import { Link } from 'react-router-dom'
import { StyledBusinessHoursPagebreadCrumb } from './styles'

const BusinessHoursPageBreadCrumb = () => {
  return (
    <>
      <StyledBusinessHoursPagebreadCrumb>
        <Link to="/app/settings">
          <span className="settings_BusinessHoursPageBreadCrumb-settings">
            Settings
          </span>
        </Link>
        <span className="settings_BusinessHoursPageBreadCrumb-slash">/</span>
        <span className="settings_BusinessHoursPageBreadCrumb-business-hours">
          BUSINESS HOURS
        </span>
      </StyledBusinessHoursPagebreadCrumb>
    </>
  )
}

export default BusinessHoursPageBreadCrumb
