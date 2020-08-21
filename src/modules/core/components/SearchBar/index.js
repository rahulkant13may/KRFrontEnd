import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { TextField, InputAdornment, IconButton } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { StyledSearchBar } from './styles'

const SearchBar = (props) => {
  const { placeholder, light, withBorder, large, children } = props

  const [keyword, setKeyword] = useState('')

  return (
    <StyledSearchBar
      $light={light}
      $withBorder={withBorder}
      $large={large}
      $isFilled={Boolean(keyword)}
    >
      <div className="core_SearchBar_wrapper">
        <TextField
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder={placeholder}
          InputProps={{
            'aria-label': 'search',
            startAdornment: (
              <InputAdornment className="core_SearchBar_search-icon">
                <FontAwesomeIcon icon={['fal', 'search']} />
              </InputAdornment>
            ),
            endAdornment: keyword ? (
              <InputAdornment
                className="core_searchBar_search--clear-icon"
                component={IconButton}
                onClick={() => setKeyword('')}
              >
                <FontAwesomeIcon icon={['fal', 'times']} />
              </InputAdornment>
            ) : null,
          }}
          fullWidth
        />
      </div>

      {children}
    </StyledSearchBar>
  )
}

SearchBar.defaultProps = {
  placeholder: 'Search',
  light: false,
  withBorder: false,
  large: false,
  children: null,
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  light: PropTypes.bool,
  withBorder: PropTypes.bool,
  large: PropTypes.bool,
  children: PropTypes.node,
}

export default SearchBar
