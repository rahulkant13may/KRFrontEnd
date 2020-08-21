import React, { useMemo, useContext } from 'react'
import PropTypes from 'prop-types'
import { format, isValid } from 'date-fns'

import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { Typography, Button } from '@material-ui/core'

import Checkbox from 'modules/core/components/Checkbox'
import { ListSelectionContext } from 'modules/tickets/hooks/useListSelection'

import { ticketsRoutes } from 'modules/tickets/routes/constants'

import TicketTag from '../../TicketTag'

import { StyledDesktopTicketsListItem } from './styles'

const DesktopTicketsListItem = (props) => {
  const {
    id,
    name,
    description,
    customer_name,
    intent,
    urgent,
    createdAt,
  } = props

  const { selectedItems, selectItem, deselectItem } = useContext(
    ListSelectionContext
  )

  const formattedDate = useMemo(() => {
    if (isValid(new Date(createdAt))) {
      return format(new Date(createdAt), 'MMM dd, yyyy')
    }

    return null
  }, [createdAt])

  const isSelected = selectedItems.includes(id)

  const selectHandler = () => {
    if (isSelected) {
      deselectItem(id)
    } else {
      selectItem(id)
    }
  }

  return (
    <StyledDesktopTicketsListItem $isSelected={isSelected}>
      <Button
        className="tickets_DesktopTicketsListItem_checkbox"
        variant="text"
        onClick={(event) => {
          event.stopPropagation()
          selectHandler()
        }}
      >
        <Checkbox
          onClick={(event) => event.stopPropagation()}
          onChange={selectHandler}
          checked={isSelected}
          bordered
          lightBorder
        />
      </Button>

      <Button
        className="tickets_DesktopTicketsListItem_info-wrapper"
        variant="text"
        component={Link}
        to={ticketsRoutes.single_ticket.to(id)}
      >
        <div className="tickets_DesktopTicketsListItem_name-description">
          <Typography className="tickets_DesktopTicketsListItem_name" noWrap>
            {name}
          </Typography>

          <Typography
            className="tickets_DesktopTicketsListItem_description"
            noWrap
          >
            {description}
          </Typography>
        </div>

        <div className="tickets_DesktopTicketsListItem_right">
          <div>
            <Typography
              className="tickets_DesktopTicketsListItem_customer-name"
              noWrap
            >
              {customer_name || <span>&#45;</span>}
            </Typography>
          </div>

          <div className="tickets_DesktopTicketsListItem_tag">
            {urgent || intent ? (
              <TicketTag
                title={
                  urgent ? (
                    <FormattedMessage
                      id="tickets.urgent"
                      defaultMessage="urgent"
                    />
                  ) : (
                    intent
                  )
                }
                variant={urgent ? 'error' : 'light'}
              />
            ) : (
              <span>&#45;</span>
            )}
          </div>

          <div>
            <Typography className="tickets_DesktopTicketsListItem_date" noWrap>
              {formattedDate || <span>&#45;</span>}
            </Typography>
          </div>
        </div>
      </Button>
    </StyledDesktopTicketsListItem>
  )
}

DesktopTicketsListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  customer_name: PropTypes.string.isRequired,
  intent: PropTypes.string,
  urgent: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
}

DesktopTicketsListItem.defaultProps = {
  intent: '',
}

export default React.memo(DesktopTicketsListItem)
