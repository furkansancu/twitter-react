import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import styles from './PostTweet.module.scss';
import BubbleButton from '../../atoms/BubbleButton/BubbleButton';
import IconButton from '../../atoms/IconButton/IconButton';

function TweetTextArea (props) {
    const textAreaDom = useRef(null);

    const textareaResize = (e) => {
        textAreaDom.current.setAttribute("style", `height:0px;`)
        textAreaDom.current.setAttribute("style", `height:${textAreaDom.current.scrollHeight - 21}px;`)
    }

    useEffect(()=>{
        window.addEventListener("resize", textareaResize)
    }, [])

    return (
        <textarea
            placeholder="What's happening?"
            className={styles.PostTweet_Tweet}
            onInput={textareaResize}
            ref={textAreaDom}
        ></textarea>
    )
}

function PostTweet(props) {
    return (
        <div className={styles.PostTweet}>
            <div className={styles.PostTweet_Profile}>
                <Link to="/profile">
                    <img src={props.user.pic} width={48} height={48} className={styles.PostTweet_ProfilePic} />
                </Link>
            </div>
            <div className={styles.PostTweet_Container}>
                <TweetTextArea />
                <div className={styles.PostTweet_TweetTools}>
                    <div className={styles.PostTweet_TweetTools__Attachments}>
                        <IconButton icon={{ name: "media", size: "20", color: "blue"}} size={36} bg="Blue" ml={-8} />
                        <IconButton icon={{ name: "gif", size: "20", color: "blue"}} size={36} bg="Blue" />
                        <IconButton className={styles.PostTweet_TweetTools__MdHide} icon={{ name: "poll", size: "20", color: "blue"}} size={36} bg="Blue" />
                        <IconButton icon={{ name: "emoji", size: "20", color: "blue"}} size={36} bg="Blue" />
                        <IconButton className={styles.PostTweet_TweetTools__MdHide} icon={{ name: "date", size: "20", color: "blue"}} size={36} bg="Blue" />
                        <IconButton icon={{ name: "location", size: "20", color: "blue"}} size={36} bg="Blue" disabled={true} />
                    </div>
                    <div className={styles.PostTweet_TweetTools__Status}>
                        <BubbleButton text="Tweet" disabled={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

PostTweet.propTypes = {
    user: PropTypes.object
}

PostTweet.defaultProps = {
    user: {
        pic: "https://pbs.twimg.com/profile_images/1581373370897244165/i-A12amj_200x200.jpg"
    }
}

export default PostTweet;