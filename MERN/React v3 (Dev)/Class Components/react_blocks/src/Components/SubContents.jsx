import React, { Component } from 'react';
import styles from './StyleComponents/Style.module.css';

class SubContents extends Component {
    render(){
        return(
            <div className={styles.sc}>
                <p>SubContents</p>
            </div>
        )
    }
}

export default SubContents;