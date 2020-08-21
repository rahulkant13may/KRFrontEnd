import React, { useMemo, useContext } from 'react'
import PropTypes from 'prop-types'
import { format, isValid } from 'date-fns'

import { FormattedMessage } from 'react-intl'
import { Typography, Box } from '@material-ui/core'

import Checkbox from 'modules/core/components/Checkbox'
import { ListSelectionContext } from 'modules/tickets/hooks/useListSelection'

import TicketTag from '../../TicketTag'

import { StyledMobileTicketsListItem } from './styles'

const MobileTicketsListItem = (props) => {
  const {
    id,
    name,
    description,
    customer_name,
    intent,
    urgent,
    open,
    createdAt,
  } = props

  const { selectedItems, selectItem, deselectItem } = useContext(
    ListSelectionContext
  )

  const formattedDate = useMemo(() => {
    if (isValid(new Date(createdAt))) {
      return format(new Date(createdAt), 'MMM dd')
    }

    return null
  }, [createdAt])

  const selectHandler = (event) => {
    if (event.target.checked) {
      selectItem(id)
    } else {
      deselectItem(id)
    }
  }

  const isSelected = selectedItems.includes(id)

  return (
    <StyledMobileTicketsListItem button $isSelected={isSelected}>
      <div className="tickets_MobileTicketsListItem_checkbox">
        <Checkbox
          onClick={(event) => event.stopPropagation()}
          onChange={selectHandler}
          checked={isSelected}
          bordered
          lightBorder
        />
      </div>

      <div className="tickets_MobileTicketsListItem_info-wrapper">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography className="tickets_MobileTicketsListItem_name" noWrap>
            {name}
          </Typography>

          <Typography className="tickets_MobileTicketsListItem_date" noWrap>
            {formattedDate || <span>&#45;</span>}
          </Typography>
        </Box>

        <Typography
          className="tickets_MobileTicketsListItem_customer-name"
          noWrap
        >
          {customer_name || <span>&#45;</span>}
        </Typography>

        <div className="tickets_MobileTicketsListItem_desc-tag">
          <Typography
            className="tickets_MobileTicketsListItem_description"
            noWrap
          >
            {description}
          </Typography>

          <div className="tickets_MobileTicketsListItem_tags">
            <div className="tickets_MobileTicketsListItem_tag">
              <TicketTag
                title={
                  open ? (
                    <FormattedMessage id="tickets.open" defaultMessage="open" />
                  ) : (
                    <FormattedMessage
                      id="tickets.closed"
                      defaultMessage="closed"
                    />
                  )
                }
                variant="dark"
              />
            </div>

            <div className="tickets_MobileTicketsListItem_tag">
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
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </StyledMobileTicketsListItem>
  )
}

MobileTicketsListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  customer_name: PropTypes.string.isRequired,
  intent: PropTypes.string,
  urgent: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
}

MobileTicketsListItem.defaultProps = {
  intent: '',
}

export default React.memo(MobileTicketsListItem)
