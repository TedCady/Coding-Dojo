import React, { useState } from 'react';
import styles from './styles/style.module.css';

const Tab = () => {
    const [tabs, setTabs] = useState([]);
    function tabbify(expr){
        var tempTab = {
            index: tabs.length,
            tab: tabs.length + 1,
            content: 'Showing content for tab ' + (tabs.length + 1),
            isSelected: false
        };
        switch(expr){
            case '+': 
                switch(tabs.length < 1){
                    case true:                        
                        setTabs([tempTab]);
                    break;
                    case false:
                        var boo = false;
                        var i = 0;
                        while(i < tabs.length){
                            if(tabs[i].index == tempTab.index){
                                boo = true;
                                break;
                            }
                            i++
                        }
                        console.log('i: ' + i);
                        switch(boo){                            
                            case true:
                                i = 0;
                                while(i == tabs[i].index){
                                    i++
                                }
                                console.log('i2: ' + i);
                                tempTab = {
                                    index: i,
                                    tab: i + 1,
                                    content: 'Showing content for tab ' + (i + 1),
                                    isSelected: false
                                };
                                console.log('tIndex: ' + tempTab.index);
                                i = 0; 
                                var tArr = [...tabs];
                                var left = [];
                                var right = [];
                                while(i < tArr.length){                                    
                                    if(tArr[i].index < tempTab.index){
                                        left.push(tArr[i]);
                                    }
                                    else if(tArr[i].index > tempTab.index){
                                        right.push(tArr[i]);
                                    }                                        
                                    i++
                                }
                                var t2 = [...left, tempTab, ...right];
                                i = 0;
                                while(i < t2.length){
                                    var j = i + 1;
                                    while(j < t2.length){
                                        if(t2[i].index > t2[j].index){
                                            var hold = t2[j];
                                            t2[j] = t2[i];
                                            t2[i] = hold;
                                            hold = null;
                                        }
                                        j++
                                    }
                                    i++
                                }
                                while(i < t2.length){
                                    if(t2[t2.length - 1].index < t2[i].index){
                                        var hold = t2[t2.length - 1];
                                        t2[t2.length - 1] = t2[i];
                                        t2[i] = hold;
                                    }
                                }
                                setTabs([...t2]);
                            break;
                            case false:
                                console.log(false);
                                setTabs([...tabs, tempTab])
                            break;
                        }
                    break;
                }
            break;
            case '-':
                const temp = [];
                tabs.map((tab) => {
                    tab.isSelected ? 
                        tab = {} :
                        temp.push(tab)
                })
                setTabs([...temp])
            break;
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
                            return <p key={tab.index} className={styles.sPara}>{tab.content}</p>
                        }
                    })
                }
            </div>
        </div>
    );
}
export default Tab;