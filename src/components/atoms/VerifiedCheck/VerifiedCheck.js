import React, { useState } from 'react'
import PropTypes from 'prop-types';

import styles from './VerifiedCheck.module.scss';

import Image from '../../../icons/verified.svg';

function VerifiedCheck(props) {
    const [bannerShow, set_bannerShow] = useState(false);

    const toggleBanner = () => { set_bannerShow(!bannerShow); }

    return (
    <div className={styles.VerifiedCheck}>
        <img onClick={toggleBanner} src={Image} width={props.size} height={props.size} alt="Verified icon" style={{cursor: "pointer"}} />
        {
            props.banner === true ? <div onClick={toggleBanner} className={`${styles.VerifiedCheck_Banner__Outer} ${bannerShow === true ? styles.VerifiedCheck_Banner__Outer__Active : null}`}></div> : null
        }
        {
            props.banner === true ?
            <div className={`${styles.VerifiedCheck_Banner} ${bannerShow === true ? styles.VerifiedCheck_Banner__Active : null}`}>
                <div className={styles.VerifiedCheck_BannerIcon}>
                    <img src={Image} width={34} height={34} alt="Verified icon" />
                </div>
                <span className={styles.VerifiedCheck_BannerTitle}>
                    Account information
                </span>
                <span className={styles.VerifiedCheck_BannerDescription}>
                    This account is verified because it’s notable in government, news, entertainment, or another designated category.
                    <a href="https://help.twitter.com/en/managing-your-account/about-twitter-verified-accounts">Learn more</a>
                </span>
            </div>
            : null
        }
    </div>
    )
}

VerifiedCheck.propTypes = {
    size: PropTypes.number,
    banner: PropTypes.bool
}

VerifiedCheck.defaultProps = {
    size: 18,
    banner: false
}

export default VerifiedCheck;