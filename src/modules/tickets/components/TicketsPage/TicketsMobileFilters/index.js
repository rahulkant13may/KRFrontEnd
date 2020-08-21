import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import PropTypes from 'prop-types'

import { Drawer, useMediaQuery } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { FiltersEnum } from 'modules/tickets/hooks/useTicketsFilters'

import {
  times,
  TimesEnum,
  getDateRangeLabel,
} from 'modules/tickets/utils/timeSelectHelpers'

import MobileTopBar from 'modules/core/components/MobileTopBar'
import MobileMenuItem from 'modules/core/components/MobileMenuItem'
import IntentMenu from './IntentMenu'
import MoodMenu from './MoodMenu'
import TimeMenu from './TimeMenu'

import { StyledSubmitButton, StyledDrawerContent } from './styles'

const { Urgent, Mood, Intent, Time, Start_Date, End_Date } = FiltersEnum

const TicketsMobileFilters = (props) => {
  const { filters, setFilter, applyFilters, onBackClick } = props

  const { urgent, mood, intent, time, startDate, endDate } = filters

  const { formatMessage } = useIntl()

  const [openedFilter, setOpenedFilter] = useState(null)

  const isMobileOnlyScreen = useMediaQuery((theme) =>
    theme.breakpoints.down('sm')
  )

  const getSelectedTimeLabel = () => {
    if (time === TimesEnum.CUSTOM_RANGE) {
      return getDateRangeLabel({
        startDate,
        endDate,
        afterLabel: formatMessage({
          id: 'tickets.after',
          defaultMessage: 'after',
        }),
        beforeLabel: formatMessage({
          id: 'tickets.before',
          defaultMessage: 'before',
        }),
      })
    }

    return times.find((item) => item.id === time)?.name
  }

  return (
    <StyledDrawerContent>
      <MobileTopBar
        leftIcon={<FontAwesomeIcon icon={['far', 'times']} />}
        onLeftIconClick={onBackClick}
        title="Filters"
        rightElement={
          <StyledSubmitButton
            onClick={() => {
              applyFilters()
              onBackClick()
            }}
            variant="contained"
            color="primary"
          >
            Apply
          </StyledSubmitButton>
        }
      >
        <MobileMenuItem
          startIcon={<FontAwesomeIcon icon={['far', 'exclamation-triangle']} />}
          title={formatMessage({
            id: 'tickets.urgent',
            defaultMessage: 'urgent',
          })}
          isSwitch
          isSwitchActive={urgent}
          onClick={() => setFilter(Urgent, !urgent)}
          onSwitchChange={() => setFilter(Urgent, !urgent)}
        />

        <MobileMenuItem
          startIcon={<FontAwesomeIcon icon={['far', 'bullseye-arrow']} />}
          title={
            intent ||
            formatMessage({
              id: 'tickets.any.intent',
              defaultMessage: 'any intent',
            })
          }
          superTitle={formatMessage({
            id: 'tickets.intent',
            defaultMessage: 'intent',
          })}
          onClick={() => setOpenedFilter(FiltersEnum.Intent)}
          withArrow
        />

        <MobileMenuItem
          startIcon={<FontAwesomeIcon icon={['far', 'meh-blank']} />}
          title={
            mood ||
            formatMessage({
              id: 'tickets.any.mood',
              defaultMessage: 'any mood',
            })
          }
          superTitle={formatMessage({
            id: 'tickets.mood',
            defaultMessage: 'mood',
          })}
          onClick={() => setOpenedFilter(FiltersEnum.Mood)}
          withArrow
        />

        <MobileMenuItem
          startIcon={<FontAwesomeIcon icon={['far', 'calendar-day']} />}
          title={
            getSelectedTimeLabel() ||
            formatMessage({
              id: 'tickets.any.time',
              defaultMessage: 'any time',
            })
          }
          superTitle={formatMessage({
            id: 'tickets.time',
            defaultMessage: 'time',
          })}
          onClick={() => setOpenedFilter(FiltersEnum.Time)}
          withArrow
        />
      </MobileTopBar>

      <Drawer
        open={openedFilter === FiltersEnum.Intent}
        anchor={isMobileOnlyScreen ? 'bottom' : 'right'}
      >
        <StyledDrawerContent>
          <IntentMenu
            selectedItem={intent}
            onSelect={(newIntent) => setFilter(Intent, newIntent)}
            onBackClick={() => setOpenedFilter(null)}
          />
        </StyledDrawerContent>
      </Drawer>

      <Drawer
        open={openedFilter === FiltersEnum.Mood}
        anchor={isMobileOnlyScreen ? 'bottom' : 'right'}
      >
        <StyledDrawerContent>
          <MoodMenu
            selectedItem={mood}
            onSelect={(newMood) => setFilter(Mood, newMood)}
            onBackClick={() => setOpenedFilter(null)}
          />
        </StyledDrawerContent>
      </Drawer>

      <Drawer
        open={openedFilter === FiltersEnum.Time}
        anchor={isMobileOnlyScreen ? 'bottom' : 'right'}
      >
        <StyledDrawerContent>
          <TimeMenu
            time={time}
            startDate={startDate}
            endDate={endDate}
            setTime={(newTime) => setFilter(Time, newTime)}
            setStartDate={(newStartDate) => setFilter(Start_Date, newStartDate)}
            setEndDate={(newEndDate) => setFilter(End_Date, newEndDate)}
            onBackClick={() => setOpenedFilter(null)}
          />
        </StyledDrawerContent>
      </Drawer>
    </StyledDrawerContent>
  )
}

TicketsMobileFilters.propTypes = {
  filters: PropTypes.shape({
    urgent: PropTypes.bool,
    mood: PropTypes.string,
    intent: PropTypes.string,
    time: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }).isRequired,
  setFilter: PropTypes.func.isRequired,
  applyFilters: PropTypes.func.isRequired,
  onBackClick: PropTypes.func.isRequired,
}

export default TicketsMobileFilters
