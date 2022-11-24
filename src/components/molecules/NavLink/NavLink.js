import React from 'react'
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';

import Icon from '../../atoms/Icon/Icon';

import styles from './NavLink.module.scss';

function NavLink(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = location.pathname === props.to;

    return (
        <div className={styles.NavLink} style={{marginTop: props.mt}}>
            <button onClick={() => {navigate(props.to)}} className={`${styles.NavLink_Button} ${props.blue_background === true ? styles.HoverBlueBG : null}`}>
                <div className={styles.NavLink_Button_Icon} style={{width: props.size, height: props.size}}>
                    <Icon name={props.icon} size={props.size} outline={!isActive} />
                    {
                        props.notification !== 0 ?
                            props.to !== "/home"
                            ? <div className={styles.NavLink_Button_Notification}>
                                {props.notification < 100 ? props.notification : "99"}
                            </div>
                            : <div className={styles.NavLink_Button_Dot}></div>
                        : null
                    }
                </div>
                {
                    props.text !== undefined ?
                    <div
                        className={styles.NavLink_Button_Text}
                        style={{fontWeight: isActive ? 700 : 400}}
                        >
                        {props.text}
                    </div>
                    :null
                }
            </button>
        </div>
    )
}

NavLink.propTypes = {
    to: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string,
    size: PropTypes.number,
    blue_background: PropTypes.bool,
    notification: PropTypes.any,
    mt: PropTypes.number
}

NavLink.defaultProps = {
    blue_background: false,
    notification: 0,
    size: 26.25,
    mt: 2
}

export default NavLink;