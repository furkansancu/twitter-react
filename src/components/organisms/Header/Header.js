import React from 'react'

import styles from './Header.module.scss';

import ProfileButton from '../../molecules/ProfileButton/ProfileButton';
import NavLink from '../../molecules/NavLink/NavLink';
import BubbleButton from '../../atoms/BubbleButton/BubbleButton';

export default function Header(props) {
  return (
    <div className={styles.Header}>
        <div className={styles.Header_Upper}>
          <NavLink to="/home" icon="Logo" mt={2} size={30} blue_background={true} />
          <nav role="navigation">
            <NavLink to="/home" icon="Home" text="Home" notification={true} mt={5} />
            <NavLink to="/explore" icon="Explore" text="Explore" notification={0}/>
            <NavLink to="/notification" icon="Notification" text="Notifications" notification={1}/>
            <NavLink to="/messages" icon="Message" text="Messages" notification={0}/>
            <NavLink to="/bookmarks" icon="Bookmark" text="Bookmarks" notification={0}/>
            <NavLink to="/lists" icon="List" text="Lists" notification={0}/>
            <NavLink to="/profile" icon="Profile" text="Profile" notification={0}/>
            <NavLink to="/more" icon="More" text="More" notification={0}/>
          </nav>
          <div className={styles.Header_Tweet}>
            <BubbleButton text="Tweet" size="XL" align="center" responsive_icon="post-tweet" />
          </div>
        </div>
        <div className={styles.Header_Bottom}>
          <ProfileButton
            pic={props.user.pic}
            name={props.user.name}
            username={props.user.username}
            verified={props.user.verified} />
        </div>
    </div>
  )
}
