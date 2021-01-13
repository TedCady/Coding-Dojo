import React, { useState } from 'react';
import styles from './styles/style.module.css';

const Tab = () => {
    const [tabs, setTabs] = useState([]);
    function tabbify(expr){
        switch(expr){
            case '+': 
                const tempTab = {
                    index: tabs.length,
                    tab: 'Tab ' + (tabs.length + 1),
                    content: 'Showing content for tab ' + (tabs.length + 1),
                    isSelected: false
                }
                if(tabs.length == 0){setTabs([tempTab])} 
                else{setTabs([...tabs, tempTab])}
                break;
            case '-':
                tabs.pop()
                setTabs([...tabs])
        }
    }

    const showContent = indx => {
        tabs.map((tab) => {
            tab.index == indx ? 
                tab.isSelected = true : 
                tab.isSelected = false;            
        })
        setTabs([...tabs]);
        console.log(tabs);
    }    

    return (
        <div className={styles.container}>
                {/* {JSON.stringify(tabs)} */}
            <label>
                Control Tab Count :
                <input className={styles.btn} type="submit" value='+' onClick={() => {tabbify('+')}}/>
                <input className={styles.btn} type="submit" value='-' onClick={() => {tabs.length > -1 ? tabbify('-') : console.log('err')}}/>
            </label>
            <div >
                {tabs.map((tab) => {
                    return <input key={tab.index} className={styles.tBtn} style={tab.isSelected ? {backgroundColor: 'blue'}:{backgroundColor: 'lightgray'}} type='submit' value={tab.tab} onClick={() => {showContent(tab.index)}}/>
                })}
            </div>
            <div>                
                {
                    tabs.map((tab) => {
                        if(tab.isSelected){
                            return <p className={styles.sPara}>{tab.content}</p>
                        }
                    })
                }
            </div>
        </div>
    );
}
export default Tab;