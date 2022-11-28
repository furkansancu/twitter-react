import React from 'react';
import PropTypes from 'prop-types';

import styles from './IconButton.module.scss';
import Icon from '../Icon/Icon';

function IconButton(props) {
  let bgClass;

  switch (props.bg.toLowerCase()) {
    default: bgClass = styles.IconButton__White
    break;
    case "blue": bgClass = styles.IconButton__Blue
    break;
  }

  return (
    <button
      disabled={props.disabled}
      className={`${styles.IconButton} ${bgClass} ${props.className}`}
      style={{
        width: props.size,
        height: props.size,
        marginRight: props.mr,
        marginLeft: props.ml
      }}
      >
      <Icon name={props.icon.name} size={props.icon.size} color={props.icon.color} />
    </button>
  )
}

IconButton.propTypes = {
  icon: PropTypes.object,
  size: PropTypes.number,
  mr: PropTypes.number,
  ml: PropTypes.number,
  bg: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.any
}

IconButton.defaultProps = {
  size: 50,
  ml: 0,
  mr: 0,
  bg: "white",
  disabled: false,
  className: null
}

export default IconButton;