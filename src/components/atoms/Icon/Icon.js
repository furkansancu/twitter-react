import React from 'react'
import PropTypes from 'prop-types';

// DEFAULT
import Logo from '../../../images/logo.svg';
import Home from '../../../icons/home.svg';
import Explore from '../../../icons/explore.svg';
import Notification from '../../../icons/notification.svg';
import Message from '../../../icons/message.svg';
import Bookmark from '../../../icons/bookmark.svg';
import List from '../../../icons/list.svg';
import Profile from '../../../icons/profile.svg';
import Verified from '../../../icons/verified.svg';
import PostTweet from '../../../icons/post-tweet.svg';

// OUTLINE
import HomeOutline from '../../../icons/home-outline.svg';
import ExploreOutline from '../../../icons/explore-outline.svg';
import NotificationOutline from '../../../icons/notification-outline.svg';
import MessageOutline from '../../../icons/message-outline.svg';
import BookmarkOutline from '../../../icons/bookmark-outline.svg';
import ListOutline from '../../../icons/list-outline.svg';
import ProfileOutline from '../../../icons/profile-outline.svg';
import MoreOutline from '../../../icons/more-outline.svg';

function Icon (props) {
    let source;

    switch (props.name.toLowerCase()) {
        case "home": source = props.outline === true ? HomeOutline : Home
        break;
        case "explore": source = props.outline === true ? ExploreOutline : Explore
        break;
        case "notification": source = props.outline === true ? NotificationOutline : Notification
        break;
        case "message": source = props.outline === true ? MessageOutline : Message
        break;
        case "bookmark": source = props.outline === true ? BookmarkOutline : Bookmark
        break;
        case "list": source = props.outline === true ? ListOutline : List
        break;
        case "profile": source = props.outline === true ? ProfileOutline : Profile
        break;
        case "more": source = MoreOutline
        break;
        case "verified": source = Verified
        break;
        default: source = Logo
        break;
        case "post-tweet": source = PostTweet
        break;
    }

    return ( 
        <img
            src={source}
            width={props.size}
            height={props.size}
            style={{
                fill: props.color
            }}
            alt="Icon"
            />
    )
}

Icon.propTypes = {
    name: PropTypes.string,
    outline: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string
}

Icon.defaultProps = {
    outline: false,
    size: 18,
    color: "#e7e9ea"
}

export default Icon;