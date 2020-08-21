import React from 'react'

import BusinessHoursPageHeader from 'modules/settings/components/BusinessHoursPageHeader'
import BusinessHoursPageTimeZoneSelect from 'modules/settings/components/BusinessHoursPageTimeZoneSelect'
import BusinessHoursPageTabs from 'modules/settings/components/BusinessHoursPageTabs'
import BusinessHoursPageRegularCalendarFirstRow from 'modules/settings/components/BusinessHoursPageRegularCalendarFirstRow'
import BusinessHoursPageRegularCalendarRow from 'modules/settings/components/BusinessHoursPageRegularCalendarRow'
import BusinessHoursPageAddHours from 'modules/settings/components/BusinessHoursPageAddHours'
import BusinessHoursPageSaveChanges from 'modules/settings/components/BusinessHoursPageSaveChanges'

import { StyledBusinessHoursPageBody } from './styles'


const BusinessHoursPageBody = () => {
  return (
    <StyledBusinessHoursPageBody>
      <BusinessHoursPageHeader />
      <BusinessHoursPageTimeZoneSelect />
      <BusinessHoursPageTabs />
      <div className="settings_BusinessHoursPage_line"></div>
      <BusinessHoursPageRegularCalendarFirstRow />
      <BusinessHoursPageRegularCalendarRow />
      <BusinessHoursPageAddHours/>
      <BusinessHoursPageSaveChanges/>
    </StyledBusinessHoursPageBody>
  )
}

export default BusinessHoursPageBody
