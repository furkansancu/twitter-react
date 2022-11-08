import React from 'react'
import PropTypes from 'prop-types';

import styles from './BubbleButton.module.scss';

function BubbleButton(props) {
  return (
    <button
      className={styles.BubbleButton}
      onClick={props.onClick}>
        {props.text}
    </button>
  )
}

BubbleButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

BubbleButton.defaultProps = {
  text: "Button",
  onClick: ()=>{}
}

export default BubbleButton;