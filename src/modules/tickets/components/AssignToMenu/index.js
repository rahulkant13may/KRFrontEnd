import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'

import SearchableMenu from 'modules/core/components/SearchableMenu'

import { StyledAvatar } from './styles'

const items = [
  {
    id: 1,
    name: 'Lisa Ciera',
    icon: <StyledAvatar variant="circle">SH</StyledAvatar>,
  },
  {
    id: 2,
    name: 'Lisa Ciera',
    icon: <StyledAvatar variant="circle">SH</StyledAvatar>,
  },
  {
    id: 3,
    name: 'Lisa Ciera',
    icon: <StyledAvatar variant="circle">SH</StyledAvatar>,
  },
  {
    id: 4,
    name: 'Lisa Ciera',
    icon: <StyledAvatar variant="circle">SH</StyledAvatar>,
  },
]

const AssignToMenu = ({ withBackButton, back, onItemClick }) => {
  const { formatMessage } = useIntl()

  return (
    <div>
      <SearchableMenu
        withBackButton={withBackButton}
        back={back}
        title={formatMessage({
          id: 'tickets.assign.to',
          defaultMessage: 'assign to',
        })}
        searchPlaceholder={formatMessage({
          id: 'tickets.search.agents',
          defaultMessage: 'search agents',
        })}
        items={items}
        onItemClick={onItemClick}
      />
    </div>
  )
}

AssignToMenu.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  back: PropTypes.func,
  withBackButton: PropTypes.bool,
}

AssignToMenu.defaultProps = {
  back: null,
  withBackButton: false,
}

export default AssignToMenu
