import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton, InputBase } from '@material-ui/core'

import MenuItem from 'modules/core/components/MenuItem'

import { StyledHead, StyledMenu } from './styles'

const SearchableMenu = (props) => {
  const {
    back,
    withBackButton,
    title,
    searchPlaceholder,
    items,
    onItemClick,
  } = props

  const { formatMessage } = useIntl()

  const backHandler = () => {
    if (typeof back === 'function') {
      back()
    }
  }

  return (
    <div>
      <StyledHead>
        <div className="core_SearchableMenu_title-wrapper">
          {withBackButton && (
            <IconButton
              className="core_SearchableMenu_back-button"
              onClick={backHandler}
            >
              <FontAwesomeIcon icon={['fal', 'arrow-left']} />
            </IconButton>
          )}

          <div className="core_SearchableMenu_title">{title}:</div>
        </div>

        <div className="core_SearchableMenu_search-input">
          <InputBase
            fullWidth
            placeholder={
              searchPlaceholder ||
              formatMessage({
                id: 'core.search',
                defaultMessage: 'search',
              })
            }
          />
        </div>
      </StyledHead>

      <StyledMenu>
        {items.map((item) => (
          <MenuItem
            key={item.id}
            text={item.name}
            icon={item.icon}
            onClick={() => onItemClick(item.id)}
          />
        ))}
      </StyledMenu>
    </div>
  )
}

SearchableMenu.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      icon: PropTypes.node,
    })
  ).isRequired,
  withBackButton: PropTypes.bool,
  back: PropTypes.func,
  searchPlaceholder: PropTypes.string,
  onItemClick: PropTypes.func.isRequired,
}

SearchableMenu.defaultProps = {
  withBackButton: false,
  searchPlaceholder: '',
  back: null,
}

export default SearchableMenu
