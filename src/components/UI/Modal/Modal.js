import React from 'react';
import styles from './Modal.module.css';

const Modal = (props)=> {
    return (<div style={{display: props.showSummary?'':'none'}} className={styles.Modal}>{props.children}</div>);
};

export default Modal;
