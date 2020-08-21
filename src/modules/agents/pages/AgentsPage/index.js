import React from 'react'

import RoundedPagination from 'modules/core/components/RoundedPagination'

import AgentsPageHeader from 'modules/agents/components/AgentsPageHeader'
import AgentsList from 'modules/agents/components/AgentsList'

import { StyledAgentsPage } from './styles'

const agents = [
  {
    id: 1,
    name: 'Lisa Ciera',
    email: 'lisaciera@gmail.com',
    role: 'Agent',
    avatar: null,
    lastSeen: '22 min ago',
  },
  {
    id: 2,
    name: 'Lisa Ciera',
    email: 'lisaciera@gmail.com',
    role: 'Agent',
    avatar: null,
    lastSeen: '22 min ago',
  },
  {
    id: 3,
    name: 'Lisa Ciera',
    email: 'lisaciera@gmail.com',
    role: 'Agent',
    avatar: null,
    lastSeen: '22 min ago',
  },
  {
    id: 4,
    name: 'Lisa Ciera',
    email: 'lisaciera@gmail.com',
    role: 'Agent',
    avatar: null,
    lastSeen: '22 min ago',
  },
  {
    id: 5,
    name: 'Lisa Ciera',
    email: 'lisaciera@gmail.com',
    role: 'Agent',
    avatar: null,
    lastSeen: '22 min ago',
  },
]

const AgentsPage = () => {
  return (
    <StyledAgentsPage>
      <AgentsPageHeader />

      <AgentsList agents={agents} />

      <RoundedPagination
        page={1}
        countPerPage={10}
        count={10}
        next={() => {}}
        back={() => {}}
      />
    </StyledAgentsPage>
  )
}

export default AgentsPage
