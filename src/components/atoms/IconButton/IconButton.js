import React from 'react';
import PropTypes from 'prop-types';

import styles from './IconButton.module.scss';

import Logo from '../../../images/logo.svg';

function IconButton(props) {
  return (
    <button
        className={`${styles.IconButton} ${props.blue ? styles.IconButton_Blue : styles.IconButton_Gray}`}
        onClick={props.onClick}
        style={{minWidth: props.size + "px", height: props.size + "px"}}
    >
      {props.active && props.active_icon !== undefined ? props.active_icon : props.icon}
      {props.notification ? <div className={styles.IconButton_Dot}></div> : null}
      {props.text !== undefined ? <span className={`${styles.IconButton_Text} ${props.active ? styles.IconButton_Text__Bold : null}`}>{props.text}</span>: null}
    </button>
  )
}

IconButton.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.number,
  active_icon: PropTypes.any,
  notification: PropTypes.bool,
  icon: PropTypes.any,
  text: PropTypes.string
}

IconButton.defaultProps = {
  active: false,
  notification: false,
  onClick: ()=>{},
  size: 50,
  icon: <img src={Logo} width={30} height={50} alt="Twitter Logo" />
}

export default IconButton;