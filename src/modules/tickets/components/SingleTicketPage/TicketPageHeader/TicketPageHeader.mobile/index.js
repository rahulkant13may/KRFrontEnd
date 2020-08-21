import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'
import { useMediaQuery, IconButton } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MobileTopBar from 'modules/core/components/MobileTopBar'
import IconTextButton from 'modules/core/components/IconTextButton'

import { StyledHeaderLeftElement } from './styles'

const MobileTicketPageHeader = ({ children }) => {
  const { formatMessage } = useIntl()

  const isTabletScreen = useMediaQuery((theme) => theme.breakpoints.up('sm'))

  return (
    <MobileTopBar
      leftIcon={<FontAwesomeIcon icon={['far', 'arrow-left']} />}
      height={60}
      rightElement={
        <StyledHeaderLeftElement>
          <div className="tickets_MobileTicketPageHeader_button">
            <IconTextButton
              icon={<FontAwesomeIcon icon={['far', 'check-circle']} />}
              title={
                isTabletScreen
                  ? formatMessage({
                      id: 'tickets.close.ticket',
                      defaultMessage: 'close ticket',
                    })
                  : formatMessage({
                      id: 'tickets.close',
                      defaultMessage: 'close',
                    })
              }
              light
              large
            />
          </div>

          {!isTabletScreen && (
            <>
              <div className="tickets_MobileTicketPageHeader_button">
                <IconTextButton
                  icon={<FontAwesomeIcon icon={['fas', 'reply']} />}
                  title={formatMessage({
                    id: 'tickets.reply',
                    defaultMessage: 'reply',
                  })}
                  light
                  large
                />
              </div>

              <div className="tickets_MobileTicketPageHeader_button">
                <IconButton className="tickets_MobileTicketPageHeader_more-button">
                  <FontAwesomeIcon icon={['far', 'ellipsis-v']} />
                </IconButton>
              </div>
            </>
          )}

          {isTabletScreen && (
            <div className="tickets_MobileTicketPageHeader_button">
              <IconTextButton
                icon={<FontAwesomeIcon icon={['far', 'ellipsis-v']} />}
                title={formatMessage({
                  id: 'tickets.more',
                  defaultMessage: 'more',
                })}
                light
                large
              />
            </div>
          )}
        </StyledHeaderLeftElement>
      }
    >
      {children}
    </MobileTopBar>
  )
}

MobileTicketPageHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MobileTicketPageHeader
