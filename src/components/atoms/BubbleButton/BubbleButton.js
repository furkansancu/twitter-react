import React from 'react'
import PropTypes from 'prop-types';

import styles from './BubbleButton.module.scss';

import Icon from '../Icon/Icon';

function BubbleButton(props) {
  let sizeName;
  const isResponsive = props.responsive_icon !== undefined;

  switch (props.size.toUpperCase()) {
    default:
      sizeName = styles.BubbleButtonM
    break;
    case "L":
      sizeName = styles.BubbleButtonL
    break;
    case "XL":
      sizeName = styles.BubbleButtonXL
    break;
  }

  const cName = `${styles.BubbleButton} ${sizeName} ${isResponsive ? styles.BubbleButton__Responsive : null}`

  return (
    <button
      className={cName}
      onClick={props.onClick}
      style={{textAlign: props.align}}>
        <span className={styles.BubbleButton_Text}>{props.text}</span>
        {
          isResponsive
          ? <span className={styles.BubbleButton_Icon}>
              <Icon name={props.responsive_icon} size={24} />
            </span>
          : null
        }
    </button>
  )
}

BubbleButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  align: PropTypes.string,
  responsive_icon: PropTypes.string
}

BubbleButton.defaultProps = {
  text: "Button",
  onClick: ()=>{},
  size: "m",
  align: "center"
}

export default BubbleButton;