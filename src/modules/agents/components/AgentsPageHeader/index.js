import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useIntl } from 'react-intl'

import SearchBar from 'modules/core/components/SearchBar'
import DashboardHeader from 'modules/core/components/DashboardHeader'
import DashboardHeading from 'modules/core/components/DashboardHeading'
import { Button } from 'modules/core/components'

import { StyledAgentsPageHeader } from './styles'

const AgentsPageHeader = () => {
  const { formatMessage } = useIntl()

  return (
    <>
      <StyledAgentsPageHeader>
        <DashboardHeader>
          <DashboardHeading
            heading={formatMessage({ id: 'agents', heading: 'agents' })}
          />
          <Button
            className="agents_AgentsPage_add-agent-button"
            startIcon={
              <FontAwesomeIcon
                className="agents_AgentsPage_add-agent-button-icon"
                icon={['far', 'plus']}
              />
            }
          >
            {formatMessage({
              id: 'agents.add.agent',
              defaultMessage: 'add agent',
            })}
          </Button>
        </DashboardHeader>
      </StyledAgentsPageHeader>

      <SearchBar
        placeholder={formatMessage({
          id: 'agents.search.agents',
          defaultMessage: 'search agents',
        })}
        large={false}
        withBorder
      />
    </>
  )
}

export default AgentsPageHeader
