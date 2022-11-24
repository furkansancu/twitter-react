import React from 'react'
import PropTypes from 'prop-types';

import styles from './ProfileButton.module.scss';

import DefaultProfile from '../../../images/defaultprofile.png';
import DotsIcon from '../../../icons/dots.svg';

import VerifiedCheck from '../../atoms/VerifiedCheck/VerifiedCheck';

function ProfileButton(props) {
  return (
    <button className={styles.ProfileButton}>
        <div className={styles.ProfileButton_Profile}>
            <img src={props.pic} width={40} height={40} alt="Profile" className={styles.ProfileButton_ProfilePic} />
            <div className={styles.ProfileButton_ProfileNames}>
                <span className={styles.ProfileButton_ProfileName}>
                    {props.name}
                    {props.verified === true ? <VerifiedCheck banner={false} /> : null}
                </span>
                <span className={styles.ProfileButton_ProfileId}>{props.username}</span>
            </div>
        </div>
        <div className={styles.ProfileButton_Dots}>
            <img src={DotsIcon} width={18.75} height={18.75} alt="Three dots icon" />
        </div>
    </button>
  )
}

ProfileButton.propTypes = {
    pic: PropTypes.any,
    name: PropTypes.string,
    username: PropTypes.string,
    onClick: PropTypes.func
}

ProfileButton.defaultProps = {
    pic: DefaultProfile,
    name: "Twitter User",
    username: "@twitter_user"
}

export default ProfileButton;