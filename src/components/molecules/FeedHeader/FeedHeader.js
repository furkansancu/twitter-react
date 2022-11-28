import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../../atoms/IconButton/IconButton';

import styles from './FeedHeader.module.scss';

function FeedHeader(props) {

    let Buttons = [];

    if (props.rightButtons.length > 0) {
        for (const element of props.rightButtons) {
            Buttons.push( <IconButton key={element.icon} icon={{name: element.icon, size: 20}} onClick={element.onClick} size={36} mr={element.mr} /> );
        }
    }

    return (
        <div className={styles.FeedHeader}>
            <div className={styles.FeedHeader_Left}>
                {
                    props.leftTitle !== undefined
                    ? <h2 className={styles.FeedHeader_Title}>{props.leftTitle}</h2>
                    : null
                }
            </div>
            <div className={styles.FeedHeader_Right}>
                {Buttons}
            </div>
        </div>
    )
}

FeedHeader.propTypes = {
    rightButtons: PropTypes.array
}

FeedHeader.defaultProps = {
    
}

export default FeedHeader;