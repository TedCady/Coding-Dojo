import { useState, useEffect } from "react"
import axios from 'axios';
import LineInfo from './LineInfo'

export default () => {
    const { itemList, setItemList } = props;
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const sortArr = data => {
            let tempArr = data;
            for(let i = 0; i < tempArr.length; i++){
                for(let ii = i + 1; ii < tempArr.length; ii++){
                    if(tempArr[i].name.toUpperCase() > tempArr[ii].name.toUpperCase()){
                        let hold = tempArr[i];
                        tempArr[i] = tempArr[ii];
                        tempArr[ii] = hold;
                    }
                }
            }
            return tempArr;
        }
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setItemList(sortArr(res.data));
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [pr]);

    return(
        loaded && (
            <div >
                <table>
                    {
                        itemList.map((item) => {
                            return <LineInfo id={item._id} info={item}/>
                        })
                    }
                </table>
            </div>
        )
    )
}