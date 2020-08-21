import React from 'react'
import PropTypes from 'prop-types'

import { Pagination } from '@material-ui/lab'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { StyledWrapper, StyledIconButton } from './styles'

const RoundedPagination = (props) => {
  const { count, page, countPerPage, next, back } = props

  const firstItem = (page - 1) * countPerPage + 1
  const lastItem = firstItem + countPerPage - 1

  return (
    <StyledWrapper>
      <StyledIconButton onClick={back} disabled={firstItem === 1}>
        <FontAwesomeIcon icon={['far', 'chevron-left']} />
      </StyledIconButton>
      <Pagination
        className="core_RoundedPagination_MuiPagination-root"
        count={count}
        shape="rounded"
        hideNextButton
        hidePrevButton
      />
      <StyledIconButton onClick={next} disabled={lastItem === count}>
        <FontAwesomeIcon icon={['far', 'chevron-right']} />
      </StyledIconButton>
    </StyledWrapper>
  )
}

RoundedPagination.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  countPerPage: PropTypes.number.isRequired,
  next: PropTypes.func.isRequired,
  back: PropTypes.func.isRequired,
}

export default RoundedPagination
