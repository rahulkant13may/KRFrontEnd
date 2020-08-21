import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import { Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { userRoutes } from 'modules/user/routes/constants'
import { authRoutes } from 'modules/auth/routes/constants'

import { signOut } from 'modules/auth/store/operations'

import { StyledUserPopoverMenu, StyledMenuItem, StyledAvatar } from './styles'

const UserPopoverMenu = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const userData = useSelector(({ user }) => user.data)

  const logoutHandler = () => {
    dispatch(signOut())
    history.push(authRoutes.subdomainLogin)
  }

  const fullName = `${userData?.first_name} ${userData?.last_name}`

  return (
    <StyledUserPopoverMenu>
      <div className="core_UserPopoverMenu_head">
        <div className="core_UserPopoverMenu_avatar">
          <StyledAvatar src={userData?.image} alt={userData?.first_name} />
        </div>

        <div className="core_UserPopoverMenu_user-info">
          <Typography
            className="core_UserPopoverMenu_user-name"
            title={fullName}
            noWrap
          >
            {fullName}
          </Typography>

          <Typography
            className="core_UserPopoverMenu_user-email"
            noWrap
            title={userData?.email}
          >
            {userData?.email}
          </Typography>
        </div>
      </div>

      <div className="core_UserPopoverMenu_menu">
        <StyledMenuItem button component={Link} to={userRoutes.profile}>
          <div className="core_UserPopoverMenu_menu-item-icon">
            <FontAwesomeIcon icon={['far', 'user']} />
          </div>

          <Typography className="core_UserPopoverMenu_menu-item-text">
            my profile
          </Typography>
        </StyledMenuItem>

        <StyledMenuItem button onClick={logoutHandler}>
          <div className="core_UserPopoverMenu_menu-item-icon">
            <FontAwesomeIcon icon={['far', 'sign-out']} />
          </div>

          <Typography className="core_UserPopoverMenu_menu-item-text">
            logout
          </Typography>
        </StyledMenuItem>
      </div>
    </StyledUserPopoverMenu>
  )
}

export default UserPopoverMenu
