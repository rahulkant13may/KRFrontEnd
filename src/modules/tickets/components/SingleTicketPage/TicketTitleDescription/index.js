import React from 'react'
import PropTypes from 'prop-types'
import { isValid, format, formatDistanceToNow } from 'date-fns'
import { useIntl } from 'react-intl'

import { useMediaQuery, Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import IconTextButton from 'modules/core/components/IconTextButton'
import TicketTag from '../../TicketTag'

import { StyledTicketTitleDescription } from './styles'

const TicketTitleDescription = (props) => {
  const { title, description, date, tags, customerName } = props

  const isDesktopScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'))
  const isTabletScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('sm', 'lg')
  )

  const { formatMessage } = useIntl()

  const isValidDate = Boolean(date) && isValid(new Date(date))

  return (
    <StyledTicketTitleDescription>
      <div className="tickets_TitleDescription_title-wrapper">
        <Typography variant="h1" className="tickets_TitleDescription_title">
          {title}
        </Typography>

        {isDesktopScreen && (
          <IconTextButton
            icon={<FontAwesomeIcon icon={['fas', 'comment-alt-times']} />}
            title={formatMessage({
              id: 'tickets.close.ticket',
              defaultMessage: 'close ticket',
            })}
          />
        )}

        {isTabletScreen && isValidDate && (
          <Typography className="tickets_TitleDescription_date">
            {format(new Date(date), 'MMM dd, h:mm aa')}
          </Typography>
        )}
      </div>

      <div className="tickets_TitleDescription_sub">
        <Typography className="tickets_TitleDescription_customer-name">
          {customerName}
        </Typography>

        {isDesktopScreen && isValidDate && (
          <Typography className="tickets_TitleDescription_date">
            {format(new Date(date), 'EEE, MMM dd, h:mm aa')}
            {' ('}
            {formatDistanceToNow(new Date(date), {
              includeSeconds: false,
              addSuffix: 'ago',
            })}
            {')'}
          </Typography>
        )}

        {!isDesktopScreen && !isTabletScreen && isValidDate && (
          <Typography className="tickets_TitleDescription_date">
            {format(new Date(date), 'MMM dd')}
          </Typography>
        )}
      </div>

      <div className="tickets_TitleDescription_tags">
        <div className="tickets_TitleDescription_tag">
          <TicketTag title="Open" variant="dark" />
        </div>

        {tags.map((tag) => (
          <div key={tag.id} className="tickets_TitleDescription_tag">
            <TicketTag title={tag.name} />
          </div>
        ))}
      </div>

      <div className="tickets_TitleDescription_text">
        <Typography className="tickets_TitleDescription_paragraph">
          {description}
        </Typography>

        <Typography className="tickets_TitleDescription_paragraph">
          {description}
        </Typography>
      </div>
    </StyledTicketTitleDescription>
  )
}

TicketTitleDescription.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TicketTitleDescription
