import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledBusinessCard,
  StyledAvatar,
  StyledInfoWrapper,
  StyledBusinessInfo,
} from './styles'

const BusinessCard = ({ name, email, avatar }) => {
  return (
    <StyledBusinessCard>
      <StyledAvatar src={avatar} alt={name} />
      <StyledInfoWrapper>
        <StyledBusinessInfo variant="h1">{name}</StyledBusinessInfo>
        <StyledBusinessInfo>{email}</StyledBusinessInfo>
      </StyledInfoWrapper>
    </StyledBusinessCard>
  )
}

BusinessCard.defaultProps = {
  email: null,
  avatar: null,
}

BusinessCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  avatar: PropTypes.string,
}

export default BusinessCard
