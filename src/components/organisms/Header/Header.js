import React from 'react'

import { useNavigate, useLocation } from 'react-router-dom';

import styles from './Header.module.scss';

import IconButton from '../../atoms/IconButton/IconButton';

import Logo from '../../../images/logo.svg';

import HomeIcon from '../../../icons/home.svg';
import ExploreIcon from '../../../icons/explore.svg';
import NotificationIcon from '../../../icons/notification.svg';
import MessageIcon from '../../../icons/message.svg';
import BookmarkIcon from '../../../icons/bookmark.svg';
import ListIcon from '../../../icons/list.svg';
import ProfileIcon from '../../../icons/profile.svg';

import HomeOutlineIcon from '../../../icons/home-outline.svg';
import ExploreOutlineIcon from '../../../icons/explore-outline.svg';
import NotificationOutlineIcon from '../../../icons/notification-outline.svg';
import MessageOutlineIcon from '../../../icons/message-outline.svg';
import BookmarkOutlineIcon from '../../../icons/bookmark-outline.svg';
import ListOutlineIcon from '../../../icons/list-outline.svg';
import ProfileOutlineIcon from '../../../icons/profile-outline.svg';
import MoreOutlineIcon from '../../../icons/more-outline.svg';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.Header}>
        <div className={styles.Header_Logo}>
            <IconButton
              icon={<img src={Logo} width={30} height={50} alt="Twitter logo" />}
              size={50}
              onClick={() => navigate('/home')}
              blue={true}
              />
            <div className={styles.Header_Buttons}>
              <div className={styles.Header_Button}>
                <IconButton
                  active={location.pathname === "/home"}
                  active_icon={<img src={HomeIcon} width={26.25} height={50} alt="Explore icon" />}
                  icon={<img src={HomeOutlineIcon} width={26.25} height={50} alt="Home icon" />}
                  notification={true}
                  text="Home"
                  size={50}
                  onClick={() => navigate('/home')}
                  />
              </div>
              <div className={styles.Header_Button}>
                <IconButton
                  active={location.pathname === "/explore"}
                  active_icon={<img src={ExploreIcon} width={26.25} height={50} alt="Explore icon" />}
                  icon={<img src={ExploreOutlineIcon} width={26.25} height={50} alt="Explore icon" />}
                  text="Explore"
                  size={50}
                  onClick={() => navigate('/explore')}
                  />
              </div>
              <div className={styles.Header_Button}>
                <IconButton
                  active={location.pathname === "/notifications"}
                  active_icon={<img src={NotificationIcon} width={26.25} height={50} alt="Explore icon" />}
                  icon={<img src={NotificationOutlineIcon} width={26.25} height={50} alt="Explore icon" />}
                  text="Notifications"
                  size={50}
                  onClick={() => navigate('/notifications')}
                  />
              </div>
              <div className={styles.Header_Button}>
                <IconButton
                  active={location.pathname === "/messages"}
                  active_icon={<img src={MessageIcon} width={26.25} height={50} alt="Explore icon" />}
                  icon={<img src={MessageOutlineIcon} width={26.25} height={50} alt="Explore icon" />}
                  text="Messages"
                  size={50}
                  onClick={() => navigate('/messages')}
                  />
              </div>
              <div className={styles.Header_Button}>
                <IconButton
                  active={location.pathname === "/bookmarks"}
                  active_icon={<img src={BookmarkIcon} width={26.25} height={50} alt="Explore icon" />}
                  icon={<img src={BookmarkOutlineIcon} width={26.25} height={50} alt="Explore icon" />}
                  text="Bookmarks"
                  size={50}
                  onClick={() => navigate('/bookmarks')}
                  />
              </div>
              <div className={styles.Header_Button}>
                <IconButton
                  active={location.pathname === "/lists"}
                  active_icon={<img src={ListIcon} width={26.25} height={50} alt="Explore icon" />}
                  icon={<img src={ListOutlineIcon} width={26.25} height={50} alt="Explore icon" />}
                  text="Lists"
                  size={50}
                  onClick={() => navigate('/lists')}
                  />
              </div>
              <div className={styles.Header_Button}>
                <IconButton
                  active={location.pathname === "/profile"}
                  active_icon={<img src={ProfileIcon} width={26.25} height={50} alt="Explore icon" />}
                  icon={<img src={ProfileOutlineIcon} width={26.25} height={50} alt="Explore icon" />}
                  text="Profile"
                  size={50}
                  onClick={() => navigate('/profile')}
                  />
              </div>
              <div className={styles.Header_Button}>
                <IconButton
                  icon={<img src={MoreOutlineIcon} width={26.25} height={50} alt="Explore icon" />}
                  text="More"
                  size={50}
                  />
              </div>
            </div>
        </div>
    </div>
  )
}
