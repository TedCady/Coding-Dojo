import React, { Component } from 'react';
import styles from './StyleComponents/Style.module.css';

class Advertisement extends Component {
    render(){
        return(
            <div className={styles.ad}>
                Advertisement
            </div>
        )
    }
}

export default Advertisement;