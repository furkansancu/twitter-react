import React from 'react'
import PropTypes from 'prop-types';

import styles from './BubbleButton.module.scss';

function BubbleButton(props) {
  let sizeName;

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

  const cName = `${styles.BubbleButton} ${sizeName}`

  return (
    <button
      className={cName}
      onClick={props.onClick}
      style={{textAlign: props.align}}>
        {props.text}
    </button>
  )
}

BubbleButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
  align: PropTypes.string
}

BubbleButton.defaultProps = {
  text: "Button",
  onClick: ()=>{},
  size: "m",
  align: "center"
}

export default BubbleButton;