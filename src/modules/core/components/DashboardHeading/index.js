import React from 'react'
import PropTypes from 'prop-types'

import { StyledHeadingWrapper, StyledHeading, StyledParagraph } from './styles'

const DashboardHeading = ({ children, heading }) => {
  return (
    <StyledHeadingWrapper>
      <StyledHeading $hasParagraph={!!children}>{heading}</StyledHeading>

      {children ? <StyledParagraph>{children} </StyledParagraph> : undefined}
    </StyledHeadingWrapper>
  )
}

DashboardHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.element,
}

DashboardHeading.defaultProps = {
  children: null,
}

export default DashboardHeading
