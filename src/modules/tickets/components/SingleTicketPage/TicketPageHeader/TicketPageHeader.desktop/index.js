import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton } from '@material-ui/core'

import FilterSelect from 'modules/tickets/components/FilterSelect'

import AssignToMenu from 'modules/tickets/components/AssignToMenu'
import MoodSelect from 'modules/tickets/components/MoodSelect'
import IntentionSelect from 'modules/tickets/components/IntentionSelect'
import IconTextButton from 'modules/core/components/IconTextButton'
import ReminderSelect from '../../ReminderSelect'
import TagsDropdown from '../../TagsDropdown'
import TicketsNavigation from '../../TicketsNavigation'

import { StyledDesktopTicketPageHeader, StyledContent } from './styles'

const DesktopTicketPageHeader = ({ children }) => {
  return (
    <>
      <StyledDesktopTicketPageHeader>
        <div className="tickets_DesktopTicketPageHeader_inner">
          <IconButton className="tickets_DesktopTicketPageHeader_back-button">
            <FontAwesomeIcon icon={['far', 'arrow-left']} />
          </IconButton>

          <div className="tickets_DesktopTicketPageHeader_actions">
            <div className="tickets_DesktopTicketPageHeader_action">
              <FilterSelect
                light
                icon={<FontAwesomeIcon icon={['far', 'headset']} />}
                placeholder="Unassigned"
                value="assigned to you"
              >
                {(closeDropdown) => (
                  <AssignToMenu
                    back={closeDropdown}
                    onItemClick={closeDropdown}
                  />
                )}
              </FilterSelect>
            </div>

            <div className="tickets_DesktopTicketPageHeader_action">
              <IntentionSelect
                light
                intent="shipping"
                placeholder="intent"
                onSelect={() => {}}
              />
            </div>

            <div className="tickets_DesktopTicketPageHeader_action">
              <MoodSelect
                light
                mood="happy"
                placeholder="mood"
                onSelect={() => {}}
              />
            </div>

            <div className="tickets_DesktopTicketPageHeader_action">
              <ReminderSelect
                light
                placeholder="set reminder"
                onSelect={() => {}}
              />
            </div>

            <div className="tickets_DesktopTicketPageHeader_action">
              <TagsDropdown light onItemClick={() => {}} />
            </div>

            <div className="tickets_DesktopTicketPageHeader_action">
              <IconTextButton
                title="mark as fan"
                activeTitle="fan"
                icon={<FontAwesomeIcon icon={['far', 'star']} />}
                activeIcon={<FontAwesomeIcon icon={['fas', 'stars']} />}
                onChange={() => {}}
                isActive={false}
                light
              />
            </div>
          </div>

          <TicketsNavigation
            ticketIndex={8}
            totalCount={128}
            onBack={() => {}}
            onNext={() => {}}
          />
        </div>
      </StyledDesktopTicketPageHeader>

      <StyledContent>{children}</StyledContent>
    </>
  )
}

DesktopTicketPageHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DesktopTicketPageHeader
