import React from 'react'
import PropTypes from 'prop-types';

import styles from './Icon.module.scss';

// DEFAULT
import { ReactComponent as Logo } from '../../../images/logo.svg';
import { ReactComponent as Home } from '../../../icons/home.svg';
import { ReactComponent as Hashtag } from '../../../icons/hashtag.svg';
import { ReactComponent as Notification } from '../../../icons/notification.svg';
import { ReactComponent as Message } from '../../../icons/message.svg';
import { ReactComponent as Bookmark } from '../../../icons/bookmark.svg';
import { ReactComponent as List } from '../../../icons/list.svg';
import { ReactComponent as Profile } from '../../../icons/profile.svg';
import { ReactComponent as Verified } from '../../../icons/verified.svg';
import { ReactComponent as PostTweet } from '../../../icons/post-tweet.svg';

// OUTLINE
import { ReactComponent as HomeOutline } from '../../../icons/home-outline.svg';
import { ReactComponent as HashtagOutline } from '../../../icons/hashtag-outline.svg';
import { ReactComponent as NotificationOutline } from '../../../icons/notification-outline.svg';
import { ReactComponent as MessageOutline } from '../../../icons/message-outline.svg';
import { ReactComponent as BookmarkOutline } from '../../../icons/bookmark-outline.svg';
import { ReactComponent as ListOutline } from '../../../icons/list-outline.svg';
import { ReactComponent as ProfileOutline } from '../../../icons/profile-outline.svg';
import { ReactComponent as MoreOutline } from '../../../icons/more-outline.svg';
import { ReactComponent as ExploreOutline } from '../../../icons/explore-outline.svg';
import { ReactComponent as DateOutline } from '../../../icons/date-outline.svg';
import { ReactComponent as EmojiOutline } from '../../../icons/emoji-outline.svg';
import { ReactComponent as GifOutline } from '../../../icons/gif-outline.svg';
import { ReactComponent as LocationOutline } from '../../../icons/location-outline.svg';
import { ReactComponent as MediaOutline } from '../../../icons/media-outline.svg';
import { ReactComponent as PollOutline } from '../../../icons/poll-outline.svg';

function Icon (props) {
    let Src, colorClass;

    switch (props.name.toLowerCase()) {
        case "home": Src = props.outline === true ? HomeOutline : Home
        break;
        case "hashtag": Src = props.outline === true ? HashtagOutline : Hashtag
        break;
        case "notification": Src = props.outline === true ? NotificationOutline : Notification
        break;
        case "message": Src = props.outline === true ? MessageOutline : Message
        break;
        case "bookmark": Src = props.outline === true ? BookmarkOutline : Bookmark
        break;
        case "list": Src = props.outline === true ? ListOutline : List
        break;
        case "profile": Src = props.outline === true ? ProfileOutline : Profile
        break;
        case "more": Src = MoreOutline
        break;
        case "verified": Src = Verified
        break;
        default: Src = Logo
        break;
        case "post-tweet": Src = PostTweet
        break;
        case "explore": Src = ExploreOutline
        break;
        case "date": Src = DateOutline
        break;
        case "emoji": Src = EmojiOutline
        break;
        case "gif": Src = GifOutline
        break;
        case "location": Src = LocationOutline
        break;
        case "media": Src = MediaOutline
        break;
        case "poll": Src = PollOutline
        break;
    }

    switch (props.color.toLowerCase()) {
        case "blue": colorClass = styles.Icon__Blue
        break;
        default: colorClass = styles.Icon__White
        break;
    }


    return ( 
        <Src
            width={props.size}
            height={props.size}
            className={colorClass}
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
    color: "white"
}

export default Icon;