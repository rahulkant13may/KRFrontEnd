import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'

import TableHeader from 'modules/core/components/TableHeader'
import TableHeaderItem from 'modules/core/components/TableHeaderItem'
import TableListItem from 'modules/core/components/TableListItem'
import TableCell from 'modules/core/components/TableCell'
import BusinessCard from 'modules/core/components/BusinessCard'

const AgentsList = ({ agents }) => {
  const { formatMessage } = useIntl()

  return (
    <>
      <TableHeader>
        <TableHeaderItem width={318}>
          {formatMessage({
            id: 'agents.header.name',
            defaultMessage: 'name',
          })}
        </TableHeaderItem>
        <TableHeaderItem width={157}>
          {formatMessage({
            id: 'agents.header.role',
            defaultMessage: 'role',
          })}
        </TableHeaderItem>
        <TableHeaderItem>
          {formatMessage({
            id: 'agents.header.last.seen',
            defaultMessage: 'last seen',
          })}
        </TableHeaderItem>
      </TableHeader>

      {agents.map((agent) => (
        <TableListItem large key={agent.id}>
          <TableCell width={318}>
            <BusinessCard
              name={agent.name}
              email={agent.email}
              avatar={agent.avatar}
              avatarAlt={agent.name}
            />
          </TableCell>
          <TableCell width={157}>{agent.role}</TableCell>
          <TableCell>{agent.lastSeen}</TableCell>
        </TableListItem>
      ))}
    </>
  )
}

AgentsList.propTypes = {
  agents: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default AgentsList
